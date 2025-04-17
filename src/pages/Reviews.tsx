import { Container } from "@mui/material";
import commingSoon from "../../../images/comming-soon.png";

export const Reviews = () => {
  return (
    <Container className="flex w-full items-center justify-center pt-12">
      <img className="w-96" src={commingSoon} alt="" />
    </Container>
  );
};
