import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished';
import {Grid, Row, Col} from 'react-styled-flexboxgrid';

export const Documentation = styled.section`
  padding: ${rem('200px')} 0 ${rem('180px')};
  background-color: ${p => p.theme.colors.greyPale};

  @media all and (min-width: 768px) {
    padding: ${rem('180px')} 0 ${rem('160px')};
  }
`;

export const Text = styled.div`
  color: ${p => p.theme.colors.grey};
  font-size: ${rem('16px')};
  line-height: 1.69;

  h4,
  h5 {
    margin-top: ${rem('45px')};
    color: ${p => p.theme.colors.dark};

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    margin-bottom: ${rem('50px')};
    color: ${p => p.theme.colors.black};
  }

  h4 {
    margin-bottom: ${rem('10px')};
    font-size: ${rem('28px')};
  }

  h5 {
    color: ${p => p.theme.colors.grey};
    font-size: ${rem('16px')};
    font-weight: 600;
    line-height: 1.69;
  }

  p,
  ul,
  ol {
    margin-bottom: ${rem('16px')};

    a {
      color: ${p => p.theme.colors.primary};
    }
  }

  ul,
  ol {
    padding-left: ${rem('25px')};
  }

  img {
    display: block;
    max-width: 100%;
    margin: ${rem('35px')} 0;
    object-fit: contain;
    mix-blend-mode: multiply;
  }

  table {
    width: 100%;
    font-weight: 600;

    tr {
      td {
        &:first-child {
          padding-right: ${rem('10px')};
        }
      }
    }
  }
`;

const CustomGutter = styled.div`
  table {
    max-width: 170px;
    margin-top: ${rem('15px')};
  }

  @media all and (min-width: 992px) {
    max-width: 380px;

    ${Row} {
      margin-right: ${rem('-20px')};
      margin-left: ${rem('-20px')};
    }

    ${Col} {
      padding-right: ${rem('20px')};
      padding-left: ${rem('20px')};
    }
  }
`;

export default ({lyci}) => {
    let constituents = [];
    if(lyci.Composition) {
        constituents = lyci.Composition.map(i => {
            return (
                <tr key={i.AssetId}>
                    <td>
                        {i.AssetId}
                    </td>
                    <td>
                        {(i.Weight * 100).toFixed(2)} %
                    </td>
                </tr>
            )
        });
    }
  return (
        <Documentation>
            <Text>
                <Grid className="container">
                    <h3>Documentation</h3>
                    <Row className="justify-content-between">
                        <Col xs={12} md={5}>
                            <h4>What is the Lykke Crypto Index?</h4>
                            <p>
                                LyCI is a tool that consolidates and tracks the performance or
                                value of a selection of underlying cryptocurrencies. This provides
                                a snapshot of how this selection of the crypto market is
                                performing overall in one single, easily understandable measure.
                                This ensures that even where one cryptocurrency in the index goes
                                up or down dramatically, the index will reflect the global
                                performance of all the assets contained, giving a more accurate
                                picture of overall market performance excluding idiosyncratic
                                risks of single assets.
                            </p>
                            <h4>How can this help users?</h4>
                            <p>
                                There are several benefits to tracking the LyCI on a regular
                                basis. These include:
                            </p>
                            <ul>
                                <li>
                                    Useful benchmark of individual cryptocurrencies against a
                                    measure of market overall performance
                                </li>
                                <li>
                                    Quick and instant measure of general performance the
                                    cryptocurrency markets, as measured by the largest players
                                </li>
                            </ul>
                            <h4>Advantages</h4>
                            <p>
                                There are several large advantages to investing directly in LyCI
                                as opposed to investing in individual crypto assets
                            </p>
                            <ul>
                                <li>
                                    Reduced risk by spreading your investment across a diversified
                                    portfolio of the largest cryptocurrencies on the market
                                </li>
                                <li>
                                    Reduced time and energy by not having to investigate and
                                    research individual assets, picking those that you prefer and
                                    ignoring those that you do not want to invest in
                                </li>
                                <li>
                                    Reduced costs through not having to address spreads across
                                    several transactions but only across those transactions related
                                    to the single index (there are no commissions on the Lykke
                                    Exchange)
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} md={5}>
                            <h4>What assets are included in LyCI?</h4>
                            <p>
                                LyCI is a weighted index which means that the proportion of each
                                digital assets contained in the group is dependent on their total
                                market capitalization. LyCI takes the current mid-market prices of
                                the 25 cryptocurrencies with the largest market capitalization –
                                i.e. those that are worth the most in terms of total asset value.
                            </p>
                            <p>
                                At the time of writing the cryptocurrencies with the highest
                                market cap and corresponding weights are (data from
                                coinmarketcap):
                            </p>
                            {/*<img
                                src="/static/images/luci-diagram.png"
                                width={512}
                                alt="diagram"
                            />*/}
                            <h4>Specification</h4>
                            <p>
                                If you want to know more details about LyCI, you can download
                                the <a href="#">index specification document</a>.
                            </p>

                            <h5>Constituents:</h5>

                            <CustomGutter>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <table>
                                            <tbody>
                                                {constituents}
                                            </tbody>
                                        </table>
                                    </Col>
                                </Row>
                            </CustomGutter>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <h4>Service Fee</h4>
                            <p>1.45% p.a. deducted from the basket value on a minute-by-minute basis.</p>
                        </Col>
                    </Row>
                </Grid>
            </Text>
        </Documentation>
    );
}
