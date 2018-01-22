import React, { PureComponent } from 'react';
import DatePicker from 'material-uikit/lib/controls/DatePicker';
import Tooltip from 'material-uikit/lib/tooltips/Tooltip';
import Input from 'material-uikit/lib/inputs/Input';
// import moment from 'moment';

class FormDatePicker extends PureComponent {

  state = {
    isVisible: false,
  };

  changeIsVisible = isVisible => this.setState({ isVisible });

  close = () => this.changeIsVisible(false);

  render() {

    const { input, meta: { error }, ...rest } = this.props;

    return (
      <Tooltip
        visible={this.state.isVisible}
        onVisibleChange={this.changeIsVisible}
        overlay={
          <div style={{ width: 494 }}>
            <DatePicker
              value={input.value && new Date(input.value)}
              onChange={(value) => {

                input.onChange(value.toDateString());
                this.close();

              }}
              month={!input.value ? new Date(1990, 1, 1) : new Date(input.value)}
              disabledDays={{
                after: new Date(),
              }}
            />
          </div>
        }
        placement="bottomLeft"
        trigger="click"
        animation="zoom"
        align={{ offset: [0, 0] }}
      >
        <Input
          placeholder="Date"
          error={error}
          {...rest}
          value={input.value}
          readOnly
        />
      </Tooltip>
    );

  }

}

export default FormDatePicker;
