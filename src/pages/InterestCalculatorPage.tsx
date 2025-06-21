import { useState } from "react";
import { InputNumber, Button, Card, Typography, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const InterestCalculatorPage = () => {
  const [principal, setPrincipal] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateInterest = () => {
    if (principal !== null && rate !== null && days !== null) {
      setLoading(true);
      setInterest(null); // clear previous result while loading

      setTimeout(() => {
        const years = days / 365;
        const result = (principal * rate * years) / 100;
        setInterest(Number(result.toFixed(2)));
        setLoading(false);
      }, 1000); // 1 second delay to simulate calculation
    }
  };

  return (
    <Card
      bordered={false}
      style={{
        maxWidth: 400,
        margin: "40px auto",
        borderRadius: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
      }}
    >
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Interest Calculator
      </Title>

      {/* Result Card */}
      <Card
        size="small"
        style={{
          marginBottom: 24,
          borderRadius: 12,
          textAlign: "center",
          minHeight: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: interest !== null ? "#f6ffed" : "#fafafa",
          borderColor: interest !== null ? "#b7eb8f" : "#d9d9d9",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        {loading ? (
          <LoadingOutlined style={{ fontSize: 24, color: "#1890ff" }} spin />
        ) : interest !== null ? (
          <Text style={{ fontSize: 20, color: "#389e0d", fontWeight: "600" }}>
            Expected Interest: ${interest}
          </Text>
        ) : (
          <Text type="secondary">Your interest will appear here</Text>
        )}
      </Card>

      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <Text strong>Principal Amount ($)</Text>
          <InputNumber
            style={{ width: "100%", marginTop: 6 }}
            value={principal ?? undefined}
            onChange={setPrincipal}
            min={0}
            placeholder="Enter principal"
            stringMode
          />
        </div>

        <div>
          <Text strong>Annual Interest Rate (%)</Text>
          <InputNumber
            style={{ width: "100%", marginTop: 6 }}
            value={rate ?? undefined}
            onChange={setRate}
            min={0}
            placeholder="e.g. 5"
            stringMode
          />
        </div>

        <div>
          <Text strong>Investment Duration (days)</Text>
          <InputNumber
            style={{ width: "100%", marginTop: 6 }}
            value={days ?? undefined}
            onChange={setDays}
            min={0}
            placeholder="Number of days"
            stringMode
          />
        </div>

        <Button
          type="primary"
          size="large"
          block
          onClick={calculateInterest}
          disabled={
            principal === null || rate === null || days === null || loading
          }
          loading={loading}
        >
          Calculate
        </Button>
      </Space>
    </Card>
  );
};
