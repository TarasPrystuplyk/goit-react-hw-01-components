import PropTypes from "prop-types";

import {
  StatisticsContainer,
  Info,
  Title,
  StatisticsList,
  Item,
  Label, 
  Percentage
} from './StatisticsStyled';

export default function Statistics({ title, stats }) {
  const isTitle = { title };
  return (
    <StatisticsContainer>
      <Info>
        <Title>{isTitle && title}</Title>
        <StatisticsList>
          {stats.map(stat => (
            <Item key={stat.id}>
              <StatisticsItem label={stat.label} percentage={stat.percentage} />
            </Item>
          ))}
        </StatisticsList>
      </Info>
    </StatisticsContainer>
  );
  function StatisticsItem({ label, percentage }) {
    return (
      <>
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      </>
    );
  }
  
}


  
  Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };

