import React from "react";
import { Button, Tooltip } from "antd";
export default function MyButton(props) {
    return (
        <Tooltip title="Ajouter une liste">
          <Button
          type="primary"
          shape="round"
          size="large"
          onClick={props.onClick}
          icon={props.icon}
          >
           {props.children}
          </Button>
        </Tooltip>
    );
}