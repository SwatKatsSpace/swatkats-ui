import React, { SFC, Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: "10px"
  }
};

export const ArticleComponent: SFC<{}> = () => {
  return (
    <Fragment>
      <FormControl style={styles.formControl}>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          id="component-simple"
          value={""}
          onChange={() => console.log("hello")}
        />
        <FormHelperText id="component-helper-text">
          Some important helper text
        </FormHelperText>
      </FormControl>
    </Fragment>
  );
};
