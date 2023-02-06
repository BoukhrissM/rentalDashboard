import { useSelector } from "react-redux";
import { Table } from "@nextui-org/react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { jsx } from "@emotion/react";

const RentedTable = () => {
  const Fields = [];

  const theme = useSelector((state) => state);
  const TableStyle = {
    height: "100%",
    width: "100%",
    backgroundColor:
      theme.bgcolor === "white" ? "#ffffff" : theme.bgcolorSecond,
  };
  const TitleStyle = {
    color: theme.bgcolor === "white" ? "#95a5a6" : "#bdc3c7",
    fontWeight: "bold",
    width: "100%",
  };
  const ColumnStyle = {
    color: theme.color,
    backgroundColor:
      theme.bgcolor === "white" ? theme.bgcolorSecond : theme.bgcolor,
      fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };
  const CellStyle = {
    color: theme.color,
  };
  for (let i = 1; i < 41; i++) {
    Fields.push(
      <Table.Row key={i}>
        <Table.Cell css={CellStyle}>{i}</Table.Cell>
        <Table.Cell css={CellStyle}>{`${i}99${i}-A-${i}`}</Table.Cell>
        <Table.Cell css={CellStyle}>01/01/2023</Table.Cell>
        <Table.Cell css={CellStyle}>07/02/2023</Table.Cell>
      </Table.Row>
    );
  }
  return (
    <>
      <span style={TitleStyle} className="text-lowercase text-capitalize">
        Derniers contrats
      </span>
      <Table
        hoverable
        animated
        sticked
        lined
        compact
        selectionMode="single"
        color={"warning"}
        css={TableStyle}
        aria-label="table des derniers contrats effecuté"
        containerCss={{ boxShadow: "none", borderRadius: 0 }}

        //   bordered
      >
        <Table.Header>
          <Table.Column key={1} className="text-uppercase" css={ColumnStyle} width={100}>
            n°contrat
          </Table.Column>
          <Table.Column key={2} className="text-uppercase" css={ColumnStyle} width={300}>
            véhicule
          </Table.Column>
          <Table.Column key={3} className="text-uppercase" css={ColumnStyle} width={100}>
            Début
          </Table.Column>
          <Table.Column key={4} className="text-uppercase" css={ColumnStyle} width={100}>
            fin
          </Table.Column>
        </Table.Header>
        <Table.Body>{Fields}</Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={5} />
      </Table>
    </>
  );
};

export default RentedTable;
