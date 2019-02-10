import React, { SFC, Fragment } from "react";
import { Form, Button } from "semantic-ui-react";
// import { Link } from "react-router-dom";

export const ArticleCreateComponent: SFC<{
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aadharId: string;
  panId: string;
  image: string;
  relation: string;
  description: string;
  likes: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAadharId: (aadharId: string) => void;
  setPanId: (panId: string) => void;
  setImage: (image: string) => void;
  setRelation: (relation: string) => void;
  setDescription: (description: string) => void;
  setLikes: (likes: string) => void;
  create: () => void;
}> = ({
  firstName,
  lastName,
  email,
  phone,
  aadharId,
  panId,
  image,
  relation,
  description,
  likes,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setAadharId,
  setPanId,
  setImage,
  setRelation,
  setDescription,
  setLikes,
  create
}) => {
  const listOfReation = [
    {
      key: "SERVANT",
      text: "Servant",
      value: "Servant",
      description: "This person works for me"
    },
    {
      key: "ACQUAINTANCE",
      text: "Acquaintance",
      value: "Acquaintance",
      description: "I have this person still do not know well "
    }
  ];
  return (
    <Fragment>
      <Form size="small">
        <Form.Input
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
          fluid
          id="firstName"
          label="FirstName"
        />
        <Form.Input
          value={lastName}
          onChange={event => setLastName(event.target.value)}
          fluid
          id="lastName"
          label="LastName"
        />
        <Form.Input
          value={email}
          onChange={event => setEmail(event.target.value)}
          fluid
          id="email"
          label="Email"
        />
        <Form.Input
          value={phone}
          onChange={event => setPhone(event.target.value)}
          fluid
          id="phone"
          label="Phone"
        />
        <Form.Input
          value={aadharId}
          onChange={event => setAadharId(event.target.value)}
          fluid
          id="aadharId"
          label="AadharId"
        />
        <Form.Input
          value={panId}
          onChange={event => setPanId(event.target.value)}
          fluid
          id="panId"
          label="PanId"
        />
        <Form.Input
          value={image}
          onChange={event => setImage(event.target.value)}
          fluid
          id="image"
          label="Image"
        />
        <Form.Select
          value={relation}
          selection
          onChange={event =>
            console.log((event.target as HTMLSelectElement))
          }
          options={listOfReation}
          fluid
          placeholder="Relation"
          label="Relation"
          id="relation"
        />
        <Form.TextArea
          value={description}
          onChange={event =>
            setDescription((event.target as HTMLInputElement).value)
          }
          id="description"
          label="Description"
        />
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        {/* <Link to={`/list`}> */}
        <Button type="submit" onClick={() => create()}>
          Submit
        </Button>
        {/* </Link> */}
      </Form>
    </Fragment>
  );
};
