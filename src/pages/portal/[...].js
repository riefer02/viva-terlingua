import React from "react";
import { Router } from "@reach/router";
import Layout from "components/Layout";
import Login from "components/Login";
import TicketHolders from "components/TicketHolders";
import PrivateRoute from "../../components/PrivateRoute";
import SEO from "components/SEO";

export default function Portal() {
  return (
    <Layout>
      <SEO
        title={`Portal`}
        description={`Web Application for Internal Usage`}
        keywords={[`terlingua`, `chili`, `cook off`, `tolbert`, `wick fowler`]}
      />
      <div className="portal">
        <Router basepath="/portal">
          <PrivateRoute path="/ticket-holders" component={TicketHolders} />
          <Login path="/login" />
        </Router>
      </div>
    </Layout>
  );
}
