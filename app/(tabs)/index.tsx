import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
  const chartData = {
    labels: ['1h', '2h', '3h', '4h', '5h', '6h'],
    datasets: [
      {
        data: [85.4, 83.2, 86.1, 84.8, 85.9, 87.2],
        color: (opacity = 1) => `rgba(0, 255, 157, ${opacity})`,
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mining Dashboard</Text>
        <Text style={styles.subtitle}>Total Hashrate: 587.45 MH/s</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="trending-up" size={24} color="#00ff9d" />
          <Text style={styles.statTitle}>Active Miners</Text>
          <Text style={styles.statValue}>12</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="flash" size={24} color="#00ff9d" />
          <Text style={styles.statTitle}>Power Usage</Text>
          <Text style={styles.statValue}>1.8 kW</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="wallet" size={24} color="#00ff9d" />
          <Text style={styles.statTitle}>Daily Earnings</Text>
          <Text style={styles.statValue}>$24.56</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Hashrate History</Text>
        <LineChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#1a1b1e',
            backgroundGradientFrom: '#1a1b1e',
            backgroundGradientTo: '#1a1b1e',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#00ff9d',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  statCard: {
    backgroundColor: '#2c2d31',
    padding: 15,
    borderRadius: 12,
    width: '31%',
    alignItems: 'center',
  },
  statTitle: {
    color: '#71717a',
    fontSize: 12,
    marginTop: 8,
  },
  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  chartContainer: {
    padding: 20,
  },
  chartTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});