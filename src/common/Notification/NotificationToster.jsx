import { notification } from "antd";

export const openNotificationWithIcon = (type, message, placement) => {
  notification[type]({
    message: message,
    style: {
      height: "100%",
    },
    placement,
  });
};
