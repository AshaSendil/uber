import { Drawer } from "antd";
import PropTypes from "prop-types";

const SideDrawer = ({
  width,
  onClose,
  visible,
  placement,
  closeIcon,
  title,
  closable,
  bodyStyle,
  headerStyle,
  children,
  className
}) => {
  return (
    <Drawer
      width={width}
      placement={placement}
      closeIcon={closeIcon}
      title={title}
      closable={closable}
      bodyStyle={bodyStyle}
      headerStyle={headerStyle}
      onClose={onClose}
      visible={visible}
      className={className}
    >
      <div>{children}</div>
    </Drawer>
  );
};
export default SideDrawer;

SideDrawer.propTypes = {
  width: PropTypes.string,
  placement: PropTypes.string,
  closeIcon: PropTypes.element,
  title: PropTypes.string,
  closable: PropTypes.bool,
  bodyStyle: PropTypes.any,
  headerStyle: PropTypes.any,
  onclose: PropTypes.func,
  visible: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string
};

SideDrawer.defaultProps = {
  width: "",
  placement: "",
  closeIcon: "",
  title: "",
  closable: "",
  bodyStyle: "",
  headerStyle: "",
  onclose: "",
  visible: "",
  children: null,
  className: ""
};
