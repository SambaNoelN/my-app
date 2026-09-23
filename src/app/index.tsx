import { SymbolView } from 'expo-symbols';
import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const profile = {
  name: 'SAMBA NOEL N.',
  role: 'Full-stack developer',
  handle: '@sambanoelnformi',
  location: 'Available for thoughtful work',
  bio: 'I design and build dependable digital products, from the first sharp idea to the last polished interaction.',
  email: 'sambanoelnformi@gmail.com',
};

const skills = ['TypeScript', 'React', 'Node.js', 'Product thinking'];

function ActionButton({
  icon,
  label,
  onPress,
  secondary = false,
}: {
  icon: 'paperplane' | 'link';
  label: string;
  onPress: () => void;
  secondary?: boolean;
}) {
  const theme = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.actionButton,
        secondary && { backgroundColor: theme.backgroundElement },
        pressed && styles.pressed,
      ]}>
      <SymbolView
        name={
          icon === 'paperplane'
            ? { ios: 'paperplane', android: 'send', web: 'send' }
            : { ios: 'link', android: 'link', web: 'link' }
        }
        tintColor={secondary ? theme.text : '#F7F5EF'}
        size={16}
      />
      <ThemedText style={[styles.actionLabel, !secondary && styles.primaryActionLabel]}>
        {label}
      </ThemedText>
    </Pressable>
  );
}

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.container}>
          <View style={styles.topBar}>
            <ThemedText type="code" style={styles.eyebrow}>
              PERSONAL / 2026
            </ThemedText>
            <View style={styles.availability}>
              <View style={styles.availabilityDot} />
              <ThemedText type="small" style={styles.availabilityText}>
                Open to work
              </ThemedText>
            </View>
          </View>

          <View style={styles.profileHeader}>
            <View style={styles.avatar}>
              <ThemedText style={styles.avatarText}>YN</ThemedText>
            </View>
            <ThemedText type="title" style={styles.title}>
              {profile.name}
            </ThemedText>
            <ThemedText type="subtitle" style={styles.role}>
              {profile.role}
            </ThemedText>
            <ThemedText themeColor="textSecondary" style={styles.bio}>
              {profile.bio}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary" style={styles.location}>
              {profile.handle}  ·  {profile.location}
            </ThemedText>
          </View>

          <View style={styles.actions}>
            <ActionButton
              icon="paperplane"
              label="Say hello"
              onPress={() => Linking.openURL(`mailto:${profile.email}`)}
            />
            <ActionButton
              icon="link"
              label="View work"
              secondary
              onPress={() => Linking.openURL('https://github.com')}
            />
          </View>

          <View style={styles.section}>
            <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>
              WHAT I BRING
            </ThemedText>
            <ThemedView type="backgroundElement" style={styles.introCard}>
              <ThemedText style={styles.introText}>
                Clear systems. Considered interfaces. A calm, curious approach to solving hard
                problems.
              </ThemedText>
            </ThemedView>
          </View>

          <View style={styles.section}>
            <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>
              TOOLKIT
            </ThemedText>
            <View style={styles.skillGrid}>
              {skills.map((skill, index) => (
                <ThemedView
                  key={skill}
                  type="backgroundElement"
                  style={[styles.skill, index === 0 && styles.featuredSkill]}>
                  <ThemedText style={styles.skillText}>{skill}</ThemedText>
                  <ThemedText themeColor="textSecondary" style={styles.skillIndex}>
                    0{index + 1}
                  </ThemedText>
                </ThemedView>
              ))}
            </View>
          </View>

          <View style={styles.footer}>
            <ThemedText type="code" themeColor="textSecondary">
              {profile.email}
            </ThemedText>
            <ThemedText type="code" themeColor="textSecondary">
              Made with care
            </ThemedText>
          </View>
        </ThemedView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    maxWidth: MaxContentWidth,
    width: '100%',
    paddingBottom: BottomTabInset + Spacing.four,
  },
  container: {
    paddingHorizontal: Spacing.four,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Spacing.three,
  },
  eyebrow: {
    letterSpacing: 1.2,
  },
  availability: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  availabilityDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#4E9F70',
  },
  availabilityText: {
    color: '#4E9F70',
    fontWeight: '700',
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 58,
    paddingBottom: 32,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#D76A45',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.four,
  },
  avatarText: {
    color: '#F7F5EF',
    fontSize: 27,
    lineHeight: 32,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 42,
    lineHeight: 48,
    fontWeight: '800',
  },
  role: {
    textAlign: 'center',
    color: '#D76A45',
    fontSize: 22,
    lineHeight: 30,
    marginTop: Spacing.one,
  },
  bio: {
    maxWidth: 560,
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 27,
    marginTop: Spacing.four,
  },
  location: {
    marginTop: Spacing.three,
  },
  actions: {
    flexDirection: 'row',
    gap: Spacing.two,
    justifyContent: 'center',
    marginBottom: 48,
  },
  actionButton: {
    minHeight: 48,
    paddingHorizontal: Spacing.four,
    borderRadius: 10,
    backgroundColor: '#D76A45',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
  actionLabel: {
    fontWeight: '700',
  },
  primaryActionLabel: {
    color: '#F7F5EF',
  },
  pressed: {
    opacity: 0.7,
  },
  section: {
    marginBottom: 36,
  },
  sectionLabel: {
    letterSpacing: 1.4,
    marginBottom: Spacing.two,
  },
  introCard: {
    borderRadius: 14,
    padding: Spacing.four,
    borderLeftWidth: 4,
    borderLeftColor: '#D76A45',
  },
  introText: {
    fontSize: 21,
    lineHeight: 30,
    fontWeight: '600',
  },
  skillGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  skill: {
    minWidth: '47%',
    flexGrow: 1,
    borderRadius: 12,
    padding: Spacing.three,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  featuredSkill: {
    backgroundColor: '#E8C9A8',
  },
  skillText: {
    fontWeight: '700',
  },
  skillIndex: {
    fontFamily: 'monospace',
    fontSize: 12,
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#B8B5AE',
    paddingVertical: Spacing.four,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
