import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
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

const projects = [
  {
    number: '01',
    title: 'Luma Commerce',
    description: 'A calmer checkout experience for a growing direct-to-consumer brand.',
    tags: 'PRODUCT DESIGN  /  REACT',
    color: '#D76A45',
  },
  {
    number: '02',
    title: 'Field Notes',
    description: 'A lightweight field reporting tool that turns observations into decisions.',
    tags: 'SYSTEMS  /  TYPESCRIPT',
    color: '#A5BCA4',
  },
  {
    number: '03',
    title: 'Signal Studio',
    description: 'An analytics workspace that makes complex product data easy to act on.',
    tags: 'DASHBOARDS  /  NODE.JS',
    color: '#E8C9A8',
  },
];

const process = [
  ['01', 'Find the signal', 'Start with the real problem, the people close to it, and the constraints that make it interesting.'],
  ['02', 'Make it tangible', 'Use clear language, quick prototypes, and small experiments to turn uncertainty into momentum.'],
  ['03', 'Build with care', 'Ship a resilient foundation, then refine the details that make the product feel unmistakably yours.'],
];

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
              <ThemedText style={styles.avatarText}>PHOTO</ThemedText>
              <ThemedText style={styles.avatarHint}>ADD YOUR IMAGE</ThemedText>
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
              onPress={() => router.push('/gallery')}
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

          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>
                SELECTED WORK
              </ThemedText>
              <ThemedText type="code" themeColor="textSecondary">
                2023 — 2026
              </ThemedText>
            </View>
            <View style={styles.projectList}>
              {projects.map((project) => (
                <Pressable
                  key={project.number}
                  accessibilityRole="button"
                  onPress={() => Linking.openURL('https://github.com')}
                  style={({ pressed }) => [
                    styles.projectCard,
                    { backgroundColor: theme.backgroundElement },
                    pressed && styles.pressed,
                  ]}>
                  <View style={[styles.projectMark, { backgroundColor: project.color }]}>
                    <ThemedText style={styles.projectMarkText}>{project.number}</ThemedText>
                  </View>
                  <View style={styles.projectCopy}>
                    <View style={styles.projectTitleRow}>
                      <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
                      <SymbolView
                        name={{ ios: 'arrow.up.right', android: 'arrow_right', web: 'arrow_right' }}
                        tintColor={theme.text}
                        size={16}
                      />
                    </View>
                    <ThemedText themeColor="textSecondary" style={styles.projectDescription}>
                      {project.description}
                    </ThemedText>
                    <ThemedText type="code" themeColor="textSecondary">
                      {project.tags}
                    </ThemedText>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>
              HOW I WORK
            </ThemedText>
            <View style={styles.processList}>
              {process.map(([number, title, description]) => (
                <View key={number} style={styles.processRow}>
                  <ThemedText type="code" style={styles.processNumber}>
                    {number}
                  </ThemedText>
                  <View style={styles.processCopy}>
                    <ThemedText style={styles.processTitle}>{title}</ThemedText>
                    <ThemedText themeColor="textSecondary" style={styles.processDescription}>
                      {description}
                    </ThemedText>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <ThemedView type="backgroundElement" style={styles.contactCard}>
            <ThemedText type="code" themeColor="textSecondary">
              HAVE A GOOD PROBLEM?
            </ThemedText>
            <ThemedText style={styles.contactTitle}>Let&apos;s make something useful.</ThemedText>
            <Pressable
              accessibilityRole="button"
              onPress={() => Linking.openURL(`mailto:${profile.email}`)}
              style={({ pressed }) => [styles.contactButton, pressed && styles.pressed]}>
              <ThemedText style={styles.contactButtonText}>Start a conversation</ThemedText>
              <SymbolView
                name={{ ios: 'arrow.right', android: 'arrow_right', web: 'arrow_right' }}
                tintColor="#F7F5EF"
                size={16}
              />
            </Pressable>
          </ThemedView>

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
    borderRadius: 16,
    backgroundColor: '#D76A45',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.four,
    borderWidth: 1,
    borderColor: '#B95232',
  },
  avatarText: {
    color: '#F7F5EF',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
  avatarHint: {
    color: '#F7D6C8',
    fontSize: 7,
    lineHeight: 11,
    fontWeight: '800',
    letterSpacing: 0.7,
    marginTop: Spacing.one,
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
  sectionHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
  projectList: {
    gap: Spacing.two,
  },
  projectCard: {
    flexDirection: 'row',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: 12,
  },
  projectMark: {
    width: 52,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectMarkText: {
    color: '#241F1B',
    fontFamily: 'monospace',
    fontWeight: '800',
  },
  projectCopy: {
    flex: 1,
    gap: Spacing.one,
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  projectTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  processList: {
    gap: Spacing.four,
  },
  processRow: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  processNumber: {
    color: '#D76A45',
    paddingTop: 2,
  },
  processCopy: {
    flex: 1,
    gap: Spacing.one,
  },
  processTitle: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '800',
  },
  processDescription: {
    fontSize: 15,
    lineHeight: 23,
  },
  contactCard: {
    borderRadius: 14,
    padding: Spacing.four,
    marginBottom: Spacing.five,
    gap: Spacing.two,
  },
  contactTitle: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
    maxWidth: 420,
  },
  contactButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#D76A45',
    borderRadius: 10,
    minHeight: 44,
    paddingHorizontal: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  contactButtonText: {
    color: '#F7F5EF',
    fontWeight: '800',
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
