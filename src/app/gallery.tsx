import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const projects = [
  {
    number: '01',
    title: 'Luma Commerce',
    type: 'PRODUCT DESIGN / REACT',
    description: 'A calmer checkout experience for a growing direct-to-consumer brand.',
    color: '#D76A45',
    accent: '#F4D6C8',
  },
  {
    number: '02',
    title: 'Field Notes',
    type: 'SYSTEMS / TYPESCRIPT',
    description: 'A lightweight field reporting tool that turns observations into decisions.',
    color: '#A5BCA4',
    accent: '#E1EBDC',
  },
  {
    number: '03',
    title: 'Signal Studio',
    type: 'DASHBOARDS / NODE.JS',
    description: 'An analytics workspace that makes complex product data easy to act on.',
    color: '#E8C9A8',
    accent: '#F8EBDD',
  },
];

export default function GalleryScreen() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  return (
    <ScrollView
      style={[styles.scrollView, { backgroundColor: theme.background }]}
      contentInset={insets}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <ThemedView style={styles.container}>
        <View style={styles.header}>
          <ThemedText type="code" themeColor="textSecondary">GALLERY / 03</ThemedText>
          <ThemedText type="code" themeColor="textSecondary">SELECTED WORK</ThemedText>
        </View>

        <View style={styles.intro}>
          <ThemedText type="subtitle" style={styles.title}>A few things I&apos;ve made.</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.lede}>
            Product experiments, client work, and systems built around one idea: useful can still feel
            beautiful.
          </ThemedText>
        </View>

        <View style={styles.projectList}>
          {projects.map((project) => (
            <Pressable
              key={project.number}
              accessibilityRole="button"
              onPress={() => router.push('/')}
              style={({ pressed }) => [styles.project, pressed && styles.pressed]}>
              <View style={[styles.projectVisual, { backgroundColor: project.color }]}>
                <View style={[styles.visualPanel, { backgroundColor: project.accent }]}>
                  <View style={styles.visualLine} />
                  <View style={[styles.visualLine, styles.shortLine]} />
                  <View style={styles.visualBlocks}>
                    <View style={styles.visualBlock} />
                    <View style={[styles.visualBlock, styles.tallBlock]} />
                  </View>
                </View>
                <ThemedText style={styles.projectNumber}>{project.number}</ThemedText>
              </View>
              <View style={styles.projectInfo}>
                <View style={styles.projectTitleRow}>
                  <ThemedText style={styles.projectTitle}>{project.title}</ThemedText>
                  <SymbolView
                    name={{ ios: 'arrow.up.right', android: 'arrow_right', web: 'arrow_right' }}
                    tintColor={theme.text}
                    size={16}
                  />
                </View>
                <ThemedText type="code" themeColor="textSecondary">{project.type}</ThemedText>
                <ThemedText themeColor="textSecondary" style={styles.description}>
                  {project.description}
                </ThemedText>
              </View>
            </Pressable>
          ))}
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/')}
          style={({ pressed }) => [styles.backLink, pressed && styles.pressed]}>
          <SymbolView
            name={{ ios: 'arrow.left', android: 'arrow_left', web: 'arrow_left' }}
            tintColor={theme.text}
            size={15}
          />
          <ThemedText style={styles.backText}>Back to home</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
  },
  container: { maxWidth: MaxContentWidth, flexGrow: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.two,
  },
  intro: {
    paddingHorizontal: Spacing.four,
    paddingTop: 56,
    paddingBottom: 40,
  },
  title: { fontSize: 38, lineHeight: 44 },
  lede: {
    fontSize: 18,
    lineHeight: 28,
    maxWidth: 600,
    marginTop: Spacing.four,
  },
  projectList: {
    gap: Spacing.four,
    paddingHorizontal: Spacing.four,
  },
  project: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#F0F0F3',
  },
  projectVisual: {
    height: 190,
    padding: Spacing.three,
    justifyContent: 'space-between',
  },
  visualPanel: {
    alignSelf: 'center',
    width: '78%',
    height: 130,
    borderRadius: 8,
    padding: Spacing.three,
    shadowColor: '#241F1B',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 3,
  },
  visualLine: {
    width: '62%',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#241F1B',
    opacity: 0.72,
  },
  shortLine: { width: '38%', marginTop: Spacing.two, opacity: 0.28 },
  visualBlocks: {
    flexDirection: 'row',
    gap: Spacing.two,
    marginTop: Spacing.four,
  },
  visualBlock: {
    flex: 1,
    height: 45,
    borderRadius: 5,
    backgroundColor: '#D76A45',
    opacity: 0.8,
  },
  tallBlock: { backgroundColor: '#A5BCA4', height: 62 },
  projectNumber: {
    color: '#241F1B',
    fontFamily: 'monospace',
    fontWeight: '800',
  },
  projectInfo: {
    padding: Spacing.three,
    gap: Spacing.two,
  },
  projectTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  projectTitle: { fontSize: 20, lineHeight: 26, fontWeight: '800' },
  description: { fontSize: 15, lineHeight: 22 },
  backLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    alignSelf: 'flex-start',
    marginHorizontal: Spacing.four,
    marginTop: Spacing.five,
  },
  backText: { fontWeight: '700' },
  pressed: { opacity: 0.7 },
});
