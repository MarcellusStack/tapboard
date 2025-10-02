import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, YStack } from "tamagui";
import { Heading } from "../components/Heading";

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
                <Text fontSize="$3" color="$green11">
                  • Basic one-tap habit tracking
                </Text>
                <Text fontSize="$3" color="$green11">
                  • Dashboard
                </Text>
                <Text fontSize="$3" color="$green11">
                  • Completely offline functionality with optional sync
                </Text>
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
                <Text fontSize="$3" color="$yellow11">
                  • Custom tracker themes & colors
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Logic like numbers, percentages, progress bars, images
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Multiple tracker correlations & optimizations
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Export CSV, JSON
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Streak reminders & notifications
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • AI insights
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Widgets for home screen
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Premium chart types (heatmap, scatter, trend lines)
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Time of day heatmap tracking
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Online sync
                </Text>
                <Text fontSize="$3" color="$yellow11">
                  • Team mode
                </Text>
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
                <Text fontSize="$3" color="$white11">
                  • Advanced AI-powered habit recommendations
                </Text>
                <Text fontSize="$3" color="$white11">
                  • Integration with health apps & wearables
                </Text>
                <Text fontSize="$3" color="$white11">
                  • achievement system
                </Text>
                <Text fontSize="$3" color="$white11">
                  • Advanced analytics & machine learning insights
                </Text>

                <Text fontSize="$3" color="$white11">
                  • Voice commands & accessibility features
                </Text>
              </YStack>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
