import { SymbolView } from 'expo-symbols';
import { router } from 'expo-router';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
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

const cvHtml = `
  <html>
    <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
    <body style="font-family: Arial, sans-serif; color: #241F1B; padding: 36px; line-height: 1.5;">
      <h1 style="font-size: 30px; margin-bottom: 4px;">SAMBA NOEL N.</h1>
      <p style="color: #D76A45; font-size: 18px; margin-top: 0;">Full-stack developer</p>
      <p>sambanoelnformi@gmail.com<br />WhatsApp: +237 670 763 266<br />@sambanoelnformi</p>
      <hr />
      <h2>Profile</h2>
      <p>I design and build dependable digital products, from the first sharp idea to the last polished interaction.</p>
      <h2>Experience</h2>
      <p><strong>Independent developer</strong> - Now<br />Building thoughtful products for people and teams who care about the details.</p>
      <p><strong>Product engineer</strong> - 2024<br />Turned ambiguous product ideas into reliable interfaces and maintainable systems.</p>
      <p><strong>Frontend developer</strong> - 2022<br />Learned to make complex workflows feel clear, fast, and human.</p>
      <h2>Toolkit</h2>
      <p>TypeScript · React · Node.js · Product thinking</p>
    </body>
  </html>
`;

async function downloadCv() {
  if (Platform.OS === 'web') {
    await Print.printAsync({ html: cvHtml });
    return;
  }

  const { uri } = await Print.printToFileAsync({ html: cvHtml });
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(uri, {
      dialogTitle: 'Download Samba Noel N. CV',
      mimeType: 'application/pdf',
      UTI: 'com.adobe.pdf',
    });
  }
}

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

        <View style={styles.cvSection}>
          <View style={styles.cvCopy}>
            <ThemedText type="code" themeColor="textSecondary">CURRICULUM VITAE</ThemedText>
            <ThemedText style={styles.cvTitle}>A concise look at my work.</ThemedText>
            <ThemedText themeColor="textSecondary" style={styles.cvDescription}>
              Download a PDF with my experience, skills, and contact details.
            </ThemedText>
          </View>
          <Pressable
            accessibilityRole="button"
            onPress={() => void downloadCv()}
            style={({ pressed }) => [styles.cvButton, pressed && styles.pressed]}>
            <ThemedText style={styles.cvButtonText}>Download CV</ThemedText>
            <SymbolView
              name={{ ios: 'arrow.down.circle', android: 'download', web: 'download' }}
              tintColor="#F7F5EF"
              size={16}
            />
          </Pressable>
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
              ['WhatsApp', 'https://wa.me/237670763266'],
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
  cvSection: {
    marginHorizontal: Spacing.four,
    marginBottom: 44,
    padding: Spacing.three,
    borderRadius: 14,
    backgroundColor: '#E8C9A8',
    gap: Spacing.three,
  },
  cvCopy: { gap: Spacing.one },
  cvTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    marginTop: Spacing.one,
  },
  cvDescription: { fontSize: 15, lineHeight: 22 },
  cvButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    minHeight: 44,
    paddingHorizontal: Spacing.three,
    borderRadius: 10,
    backgroundColor: '#D76A45',
  },
  cvButtonText: { color: '#F7F5EF', fontWeight: '800' },
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