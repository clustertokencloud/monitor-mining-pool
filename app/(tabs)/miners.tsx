import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Miners() {
  const miners = [
    {
      id: 1,
      name: 'RTX 3080',
      type: 'GPU',
      hashrate: '98.5 MH/s',
      power: '220W',
      temp: '62°C',
      status: 'active',
    },
    {
      id: 2,
      name: 'RTX 3070',
      type: 'GPU',
      hashrate: '62.3 MH/s',
      power: '130W',
      temp: '58°C',
      status: 'active',
    },
    {
      id: 3,
      name: 'Antminer S19',
      type: 'ASIC',
      hashrate: '95 TH/s',
      power: '3250W',
      temp: '75°C',
      status: 'warning',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mining Devices</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={24} color="#00ff9d" />
        </TouchableOpacity>
      </View>

      {miners.map((miner) => (
        <View key={miner.id} style={styles.minerCard}>
          <View style={styles.minerHeader}>
            <View style={styles.minerInfo}>
              <Text style={styles.minerName}>{miner.name}</Text>
              <View style={[styles.badge, styles[`badge${miner.status}`]]}>
                <Text style={styles.badgeText}>{miner.status}</Text>
              </View>
            </View>
            <Text style={styles.minerType}>{miner.type}</Text>
          </View>

          <View style={styles.minerStats}>
            <View style={styles.statItem}>
              <Ionicons name="speedometer" size={20} color="#00ff9d" />
              <Text style={styles.statLabel}>Hashrate</Text>
              <Text style={styles.statValue}>{miner.hashrate}</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="flash" size={20} color="#00ff9d" />
              <Text style={styles.statLabel}>Power</Text>
              <Text style={styles.statValue}>{miner.power}</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="thermometer" size={20} color="#00ff9d" />
              <Text style={styles.statLabel}>Temperature</Text>
              <Text style={styles.statValue}>{miner.temp}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    padding: 8,
  },
  minerCard: {
    backgroundColor: '#2c2d31',
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
  },
  minerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  minerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minerName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  minerType: {
    color: '#71717a',
    fontSize: 14,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeactive: {
    backgroundColor: 'rgba(0, 255, 157, 0.2)',
  },
  badgewarning: {
    backgroundColor: 'rgba(255, 171, 0, 0.2)',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  minerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#71717a',
    fontSize: 12,
    marginTop: 4,
  },
  statValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 2,
  },
});