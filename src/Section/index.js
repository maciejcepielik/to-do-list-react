import { StyledSection, SectionTitle, SectionTitleName, SectionCheckList } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <SectionTitle>
      <SectionTitleName>{title}</SectionTitleName>
      {extraHeaderContent}
    </SectionTitle>
    <SectionCheckList>
      {body}
    </SectionCheckList>
  </StyledSection>
);

export default Section;