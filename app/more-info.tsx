import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, YStack } from "tamagui";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";

export default function MoreInfoScreen() {
  return (
    <ScrollView flex={1} backgroundColor="$background">
      <StatusBar style="auto" />

      <YStack
        flex={1}
        padding="$6"
        gap="$6"
        maxWidth={600}
        alignSelf="center"
        width="100%"
      >
        {/* Header */}
        <YStack alignItems="flex-start" gap="$4">
          <Heading headingSize="lg">Features & Roadmap</Heading>
        </YStack>

        {/* Roadmap */}
        <YStack gap="$6">
          <YStack gap="$4">
            {/* Currently Implemented */}
            <YStack
              gap="$3"
              padding="$4"
              backgroundColor="$green2"
              borderRadius="$4"
            >
              <Heading headingSize="md" color="$green11">
                Implemented
              </Heading>
              <YStack gap="$2">
                <Paragraph paragraphSize="sm" variant="green">
                  • Basic one-tap habit tracking
                </Paragraph>
                <Paragraph paragraphSize="sm" variant="green">
                  • Dashboard
                </Paragraph>
                <Paragraph paragraphSize="sm" variant="green">
                  • Completely offline functionality with optional sync
                </Paragraph>
              </YStack>
            </YStack>

            {/* Planned */}
            <YStack
              gap="$3"
              padding="$4"
              backgroundColor="$yellow2"
              borderRadius="$4"
            >
              <Heading headingSize="md" color="$yellow11">
                Planned
              </Heading>
              <YStack gap="$2">
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Custom tracker themes & colors
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Logic like numbers, percentages, progress bars, images
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Multiple tracker correlations & optimizations
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Export CSV, JSON
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Streak reminders & notifications
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • AI insights
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Widgets for home screen
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Premium chart types (heatmap, scatter, trend lines)
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Time of day heatmap tracking
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Online sync
                </Paragraph>
                <Paragraph paragraphSize="sm" color="$yellow11">
                  • Team mode
                </Paragraph>
              </YStack>
            </YStack>

            {/* In the Future */}
            <YStack
              gap="$3"
              padding="$4"
              backgroundColor="$white2"
              borderRadius="$4"
            >
              <Heading headingSize="md" color="$white11">
                In the Future
              </Heading>
              <YStack gap="$2">
                <Paragraph paragraphSize="sm" variant="dimmed">
                  • Advanced AI-powered habit recommendations
                </Paragraph>
                <Paragraph paragraphSize="sm" variant="dimmed">
                  • Integration with health apps & wearables
                </Paragraph>
                <Paragraph paragraphSize="sm" variant="dimmed">
                  • achievement system
                </Paragraph>
                <Paragraph paragraphSize="sm" variant="dimmed">
                  • Advanced analytics & machine learning insights
                </Paragraph>
                <Paragraph paragraphSize="sm" variant="dimmed">
                  • Voice commands & accessibility features
                </Paragraph>
              </YStack>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
