import { Avatar,User, Dropdown,Text } from "@nextui-org/react";
import { theme } from "antd";

export const ProfileDropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger >
        <Avatar
          size={"md"}
          bordered
          color={"warning"}
          as="button"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item><Text>Profile</Text></Dropdown.Item>
        <Dropdown.Item >Paramètre</Dropdown.Item>
        <Dropdown.Item withDivider>Déconnexion</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
