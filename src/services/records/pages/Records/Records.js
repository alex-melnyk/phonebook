import React, { PureComponent } from 'react';
import { uniq } from 'lodash';
import ReactAutocomplete from 'react-autocomplete';
import Button from 'material-uikit/lib/buttons/Button';
import Create from 'services/records/forms/Create';
import IconMenu from 'material-uikit/lib/dropdowns/IconMenu';
import MoreIcon from 'material-uikit/lib/icons/More';
import styles from './Records.scss';

class Records extends PureComponent {

  state = {
    value: '',
    sort: 'phone', // first_name last_name birthday
  };

  changeSort = sort => () => this.setState({ sort });
  clear = () => this.setState({ value: '' });

  add = () => {

    const { open, close, show } = this.props;

    open({
      component: Create,
      name: 'CREATE',
      props: {
        onSubmitSuccess: () => {

          show('Record has been created successfully');
          close('CREATE');

        },
      },
      modalProps: {
        isForm: true,
      },
    });

  };

  edit = record => () => {

    const { open, close, show } = this.props;

    open({
      component: Create,
      name: 'CREATE',
      props: {
        initialValues: record,
        onSubmitSuccess: () => {

          show('Record has been edit successfully');
          close('CREATE');

        },
      },
      modalProps: {
        isForm: true,
      },
    });

  };

  getRecords() {

    const { value, sort } = this.state;
    let { records } = this.props;

    records = records.filter(
      ({ id, ...record }) =>
        Object.values(record).some(field => field.toLowerCase().includes(value.toLowerCase()),
      ),
    );

    records = [...records].sort((a, b) => {

      if (a[sort].toLowerCase() > b[sort].toLowerCase()) return 1;
      if (a[sort].toLowerCase() < b[sort].toLowerCase()) return -1;

      return 0;

    });

    return records;

  }

  render() {

    const records = this.getRecords();
    const { sort } = this.state;
    const { remove, show, records: precords } = this.props;

    return (
      <div className={styles.general}>
        <div className={styles.head}>
          <h1>Records</h1>
          <Button onClick={this.add} size="l" mod="primary">Add record</Button>
        </div>
        {
          precords.length ? (
            <div>
              <div className={styles.inputWrap}>
                <ReactAutocomplete
                  items={
                    uniq(records.reduce(
                      (acc, { id, ...r }) => [...acc, ...Object.values(r).map(v => v)],
                      [],
                    )).map(v => ({ id: v, label: v }))
                  }
                  shouldItemRender={
                    (item, value) =>
                      value.toLowerCase() &&
                      item.label.toLowerCase().includes(value.toLowerCase())
                  }
                  getItemValue={item => item.label}
                  renderItem={(item, highlighted) =>
                    <div
                      key={item.id}
                      style={{ backgroundColor: highlighted ? '#eee' : '#fff', fontSize: 16, padding: 5 }}
                    >
                      {item.label}
                    </div>
                  }
                  value={this.state.value}
                  onChange={e => this.setState({ value: e.target.value })}
                  onSelect={value => this.setState({ value })}
                  inputProps={{
                    placeholder: 'Type for searching',
                    style: {
                      height: 36,
                    },
                  }}
                  // menuStyle={{
                  //   padding: 0,
                  // }}
                />
              </div>
              {
                records.length ? (
                  <table width="100%" className={styles.table}>
                    <thead>
                      <tr>
                        <th className={sort === 'phone' && styles.sorted} onClick={this.changeSort('phone')}>Phone</th>
                        <th className={sort === 'first_name' && styles.sorted} onClick={this.changeSort('first_name')}>First name</th>
                        <th className={sort === 'last_name' && styles.sorted} onClick={this.changeSort('last_name')}>Last name</th>
                        <th className={sort === 'birthday' && styles.sorted} onClick={this.changeSort('birthday')}>Birthday</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {
                        records.map((record) => {

                          const options = [
                            {
                              value: 'Edit',
                              onClick: this.edit(record),
                            },
                            {
                              value: 'Remove',
                              onClick() {

                                remove(record.id);
                                show('Record removed successfully');

                              },
                            },
                          ];

                          return (
                            <tr className={styles.record} key={record.phone}>
                              <td>{record.phone}</td>
                              <td>{record.first_name}</td>
                              <td>{record.last_name}</td>
                              <td>{record.birthday}</td>
                              <td>
                                <IconMenu
                                  options={options}
                                  onRight
                                  icon={<MoreIcon />}
                                />
                              </td>
                            </tr>
                          );

                        })
                      }
                    </tbody>
                  </table>
                ) : (
                  <h3 className={styles.empty}>
                    No records, change search filter
                    <span onClick={this.clear} className={styles.clear}>(clear)</span>
                  </h3>
                )
              }
            </div>
          ) : (
            <h3 className={styles.empty}>No records, add your first record</h3>
          )
        }
      </div>
    );

  }

}

export default Records;
