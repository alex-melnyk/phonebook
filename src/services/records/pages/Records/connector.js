import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getRecords, remove } from 'services/records/modules/core';
import { open, close } from 'modules/modal';
import { show } from 'modules/notify';
import Records from './Records';

const mapStateToProps = createStructuredSelector({
  records: getRecords,
});

const mapDispatchToProps = {
  open,
  close,
  show,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);
