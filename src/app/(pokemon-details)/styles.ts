import Button from "@/components/button";
import Typography from "@/components/typography";
import { styled } from "@/modules";

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
})``;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export const Description = styled(Typography)`
  font-size: 14px;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  padding: 16px;
`;

export const TitleWrapper = styled.View`
  padding: 16px;
  width: 100%;
`;

export const BtCapture = styled(Button)``;

export const ButtonWrapper = styled.View<{ marginBottom: number }>`
  margin-bottom: ${(props) => props.marginBottom}px;
  padding: 0px 16px;
`;
