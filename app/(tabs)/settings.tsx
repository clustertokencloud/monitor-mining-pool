import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [autoStart, setAutoStart] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="notifications" size={20} color="#00ff9d" />
            <Text style={styles.settingLabel}>Notifications</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#3f3f46', true: '#059669' }}
            thumbColor={notifications ? '#00ff9d' : '#71717a'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="play-circle" size={20} color="#00ff9d" />
            <Text style={styles.settingLabel}>Auto-start mining</Text>
          </View>
          <Switch
            value={autoStart}
            onValueChange={setAutoStart}
            trackColor={{ false: '#3f3f46', true: '#059669' }}
            thumbColor={autoStart ? '#00ff9d' : '#71717a'}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Ionicons name="moon" size={20} color="#00ff9d" />
            <Text style={styles.settingLabel}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#3f3f46', true: '#059669' }}
            thumbColor={darkMode ? '#00ff9d' : '#71717a'}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mining Pools</Text>
        <TouchableOpacity style={styles.poolItem}>
          <View style={styles.poolInfo}>
            <Text style={styles.poolName}>Ethermine</Text>
            <Text style={styles.poolUrl}>eth.ethermine.org:4444</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#71717a" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.poolItem}>
          <View style={styles.poolInfo}>
            <Text style={styles.poolName}>2Miners</Text>
            <Text style={styles.poolUrl}>eth.2miners.com:2020</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#71717a" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.dangerButton}>
        <Text style={styles.dangerButtonText}>Reset All Settings</Text>
      </TouchableOpacity>
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
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00ff9d',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c2d31',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
  poolItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c2d31',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  poolInfo: {
    flex: 1,
  },
  poolName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  poolUrl: {
    color: '#71717a',
    fontSize: 14,
    marginTop: 4,
  },
  dangerButton: {
    backgroundColor: '#dc2626',
    margin: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  dangerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});