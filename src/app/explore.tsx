import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const experience = [
  ['NOW', 'Independent developer', 'Building thoughtful products for people and teams who care about the details.'],
  ['2024', 'Product engineer', 'Turned ambiguous product ideas into reliable interfaces and maintainable systems.'],
  ['2022', 'Frontend developer', 'Learned to make complex workflows feel clear, fast, and human.'],
];

const principles = ['Clarity over cleverness', 'Small systems that scale', 'Details are part of the function'];

export default function AboutScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const theme = useTheme();
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
          <ThemedText type="code" themeColor="textSecondary">ABOUT / 02</ThemedText>
          <ThemedText type="code" themeColor="textSecondary">A LITTLE CONTEXT</ThemedText>
        </View>

        <View style={styles.intro}>
          <ThemedText type="subtitle" style={styles.title}>I like making hard things feel simple.</ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.lede}>
            I&apos;m a full-stack developer with a product mindset. I work across interface, code, and
            systems to turn rough ideas into useful tools people want to return to.
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>EXPERIENCE</ThemedText>
          <View style={styles.timeline}>
            {experience.map(([year, role, description]) => (
              <View key={year} style={styles.timelineRow}>
                <ThemedText type="code" style={styles.year}>{year}</ThemedText>
                <View style={styles.timelineCopy}>
                  <ThemedText style={styles.role}>{role}</ThemedText>
                  <ThemedText themeColor="textSecondary" style={styles.description}>{description}</ThemedText>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>PRINCIPLES</ThemedText>
          <ThemedView type="backgroundElement" style={styles.principlesCard}>
            {principles.map((principle, index) => (
              <View key={principle} style={styles.principleRow}>
                <ThemedText type="code" themeColor="textSecondary">0{index + 1}</ThemedText>
                <ThemedText style={styles.principle}>{principle}</ThemedText>
              </View>
            ))}
          </ThemedView>
        </View>

        <View style={styles.section}>
          <ThemedText type="smallBold" themeColor="textSecondary" style={styles.sectionLabel}>ELSEWHERE</ThemedText>
          <View style={styles.links}>
            {[
              ['GitHub', 'https://github.com'],
              ['LinkedIn', 'https://linkedin.com'],
              ['Email', 'mailto:sambanoelnformi@gmail.com'],
            ].map(([label, url]) => (
              <Pressable key={label} onPress={() => Linking.openURL(url)} style={({ pressed }) => [styles.link, pressed && styles.pressed]}>
                <ThemedText style={styles.linkText}>{label}</ThemedText>
                <SymbolView name={{ ios: 'arrow.up.right', android: 'arrow_right', web: 'arrow_right' }} tintColor={theme.text} size={15} />
              </Pressable>
            ))}
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/gallery')}
          style={({ pressed }) => [styles.galleryLink, pressed && styles.pressed]}>
          <ThemedText style={styles.galleryLinkText}>See selected work</ThemedText>
          <SymbolView
            name={{ ios: 'arrow.right', android: 'arrow_right', web: 'arrow_right' }}
            tintColor="#F7F5EF"
            size={15}
          />
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
    paddingBottom: 48,
  },
  title: { fontSize: 38, lineHeight: 44, maxWidth: 600 },
  lede: {
    fontSize: 18,
    lineHeight: 28,
    maxWidth: 600,
    marginTop: Spacing.four,
  },
  section: { paddingHorizontal: Spacing.four, marginBottom: 44 },
  sectionLabel: { letterSpacing: 1.4, marginBottom: Spacing.three },
  timeline: { gap: Spacing.four },
  timelineRow: { flexDirection: 'row', gap: Spacing.four },
  year: { color: '#D76A45', width: 42, paddingTop: 3 },
  timelineCopy: { flex: 1, gap: Spacing.one },
  role: { fontSize: 18, lineHeight: 24, fontWeight: '800' },
  description: { fontSize: 15, lineHeight: 23 },
  principlesCard: { borderRadius: 12, padding: Spacing.three, gap: Spacing.three },
  principleRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  principle: { fontSize: 17, fontWeight: '700' },
  links: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: '#B8B5AE' },
  link: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.three,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#B8B5AE',
  },
  linkText: { fontSize: 17, fontWeight: '700' },
  galleryLink: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: Spacing.two,
    marginHorizontal: Spacing.four,
    marginBottom: Spacing.five,
    paddingHorizontal: Spacing.three,
    minHeight: 46,
    borderRadius: 10,
    backgroundColor: '#D76A45',
  },
  galleryLinkText: { color: '#F7F5EF', fontWeight: '800' },
  pressed: { opacity: 0.7 },
});