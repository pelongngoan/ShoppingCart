import commingSoon from "../assets/images/comming-soon.png";
import { Container } from "../components/ui-common/Container";
export const Home = () => {
  return (
    <Container className="flex w-full items-center justify-center pt-12">
      <img className="w-96" src={commingSoon} alt="" />
    </Container>
  );
};
