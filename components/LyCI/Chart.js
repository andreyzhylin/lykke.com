import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {rem} from 'polished';
import {Line} from 'react-chartjs-2'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { CHART_DATA, CHART_OPTIONS } from '../../config'

const StyledTabList = styled(TabList)`
  display: flex;
  align-items: center;
  list-style: none;
  color: ${p => p.theme.colors.lightGrey}
`;

const StyledTab = styled(Tab).attrs({
    selectedClassName: 'selected',
    disabledClassName: 'disabled'
})`
  font-size: ${rem('20px')};
  font-weight: bold;
  font-family: ${p => p.theme.fonts.headings};
  padding: ${rem('10px')};
  cursor: pointer;
  &.selected {
    color: ${p => p.theme.colors.dark}
  }
`;


const mapChartData = (arr, ticks) => {
    return {
        dates: arr.map(el => moment(el.dt).format('Do MMM, HH:MM')).filter((e, i) => i===0 || i%ticks === 0 || i === e.length),
        data: arr.map(el => el.v).filter((e, i) => i===0 || i%ticks === 0 || i === e.length)
    }
};

export default ({ lyciChart }) => {
    const chart24H = mapChartData(lyciChart.hours24, 50);
    const chartData24h = CHART_DATA(chart24H.dates, chart24H.data, 'rgb(19,183,42)');

    const chart5D = mapChartData(lyciChart.days5, 50);
    const chartData5d = CHART_DATA(chart5D.dates, chart5D.data, 'rgb(19,183,42)');

    const chart30D = mapChartData(lyciChart.days30, 50);
    const chartData30d = CHART_DATA(chart30D.dates, chart30D.data, 'rgb(19,183,42)');

    const chartOptions = CHART_OPTIONS;
    return (
        <Tabs>
            <StyledTabList>
                <StyledTab>24h</StyledTab>
                <StyledTab>5d</StyledTab>
                <StyledTab>30d</StyledTab>
            </StyledTabList>

            <TabPanel>
                <div>
                    <Line data={chartData24h} options={chartOptions}/>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <Line data={chartData5d} options={chartOptions}/>
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <Line data={chartData30d} options={chartOptions}/>
                </div>
            </TabPanel>
        </Tabs>
    )
}