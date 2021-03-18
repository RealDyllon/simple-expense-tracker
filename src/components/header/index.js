import { Button, Text } from "@geist-ui/react";
import { Plus, Settings } from "@geist-ui/react-icons";
import React from "react";

const Header = ({ setAddExpModalVisible }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.titleWrapper}>
        <Text h3>Simple Expense Tracker</Text>
      </div>
      <div style={styles.midSpace}></div>
      <div style={styles.buttonsWrapper}>
        <Button
          icon={<Plus />}
          type="success-light"
          onClick={() => {
            setAddExpModalVisible(true);
          }}
        >
          Add Expense
        </Button>
      </div>
    </div>
  );
};

export default Header;

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrapper: {
    marginTop: 10,
    marginLeft: 20,
  },
  midSpace: {
    flex: 1,
  },
  buttonsWrapper: {
    marginRight: 20,
  },
  addButton: {},
};
