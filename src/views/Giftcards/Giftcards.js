import React, { Component } from "react";
import { CDataTable, CRow, CCol } from "@coreui/react";

const fields = [
  { key: "Gift_card_code", label: "Gift card code" },
  { key: "Amount", label: "Amount" },
  { key: "Email", label: "Email" },
];

const usersData = [
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
  {
    Gift_card_code: "SL012356",
    Amount: "$600",
    Email: "cpp@arola.email",
  },
];

class Giftcards extends Component {
  render() {
    return (
      <>
        <CRow>
          <CCol>
            <h4>
              Gift cards/ discounts for admin to issue by category or to
              specific users etc
            </h4>
          </CCol>
        </CRow>

        <CDataTable
          items={usersData}
          fields={fields}
          // columnFilter
          //    / tableFilter
          // footer
          // itemsPerPageSelect
          //  itemsPerPage={5}
          hover
          pagination
        />
      </>
    );
  }
}

export default Giftcards;
