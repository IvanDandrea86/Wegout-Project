import { gql, useQuery } from "@apollo/client";
import { Grid, ListItemText, Typography } from "@mui/material";
import { FC, Fragment, useEffect, useRef } from "react";
import ErrorMess from "../Utility/ErrorMess";
import Loading from "../Utility/Loading";
import dayjs from "dayjs"
interface IMessageProp {
  name: string;
  body: string;
  align: "right" | "left" | "inherit" | "center" | "justify" | undefined;
  date: Date;
}
const GETUSERBYID = gql`
  query ($_id: String!) {
    findUserById(user_id: $_id) {
      firstname
      email
    }
  }
`;

export const MessageBubble: FC<IMessageProp> = ({
  name,
  body,
  align,
  date,
}) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const { data, loading, error } = useQuery(GETUSERBYID, {
    variables: {
      _id: name,
    },
  });
  const scrollToBottom = () => {
    if (messagesEndRef.current !== null) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(scrollToBottom, []);

  if (error) {
    return <ErrorMess />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <Grid item xs={12}>
        <ListItemText
          ref={messagesEndRef}
          sx={{ display: "flex", alignItems: align, justifyContent: align }}
          primary={`${data.findUserById.firstname}:${body} `}
        ></ListItemText>
        <Typography align={align} variant="subtitle2">
          {dayjs(date).format('DD MMMM YYYY, hh:mm:ss A')}
         
        </Typography>
      </Grid>
    </Fragment>
  );
};
