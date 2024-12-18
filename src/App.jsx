import React, { useEffect, useState } from "react";
import "./index.css";
import { Button } from "./components/Button";
import { Heading } from "./components/Heading";
import { Typography } from "./components/Typography";
import "./index.css";
import { Tooltip } from "./components/Tooltip";
import "./assets/fonts/fonts.css";
import { Accordion } from "./components/Accordion";
import { Input } from "./components/Input";


export function App() {
  const [cryptos, setCryptos] = useState([]); 
  const [filteredCryptos, setFilteredCryptos] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 


  const fetchData = () => {
    setLoading(true);
    fetch("https://api.coinlore.net/api/tickers/")
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data.data);
        setFilteredCryptos(data.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = cryptos.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(value.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCryptos(filtered);
  };

  return (
    <div className="app-container">
      <div class="top">
        <Heading level="1">Cryptocurrency Prices</Heading>

        <Button variant="bordered" size="md" onClick={fetchData}>
          Update
        </Button>

        <Input
          placeholder="Search for cryptocurrency"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <Typography textSize="lg">Loading...</Typography>
      ) : (
        filteredCryptos.map((crypto) => (
          <Accordion key={crypto.id} title={crypto.name}>
            <div>
              <Typography>
                <strong>Symbol:</strong> {crypto.symbol}
              </Typography>
              <Typography>
                <strong>Price USD:</strong> {crypto.price_usd}
              </Typography>
              <Typography>
                <strong>Price BTC:</strong> {crypto.price_btc}
              </Typography>
              <Tooltip text="The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
                <Typography>
                  <strong>Market Cap USD:</strong> {crypto.market_cap_usd}
                </Typography>
              </Tooltip>
              <Typography
                textSize="md"
                style={{
                  color: crypto.percent_change_24h >= 0 ? "green" : "red",
                }}
              >
                <strong>Percent Change 24H:</strong> {crypto.percent_change_24h}
                %
              </Typography>
            </div>
          </Accordion>
        ))
      )}
    </div>
  );
}

