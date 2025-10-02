import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";
import { Paragraph, ScrollView, useTheme, XStack, YStack } from "tamagui";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ScrollView flex={1} backgroundColor="$background">
      <StatusBar style="auto" />

      <YStack
        flex={1}
        padding="$6"
        paddingTop="$12"
        alignItems="center"
        justifyContent="center"
        gap="$3"
        maxWidth={600}
        alignSelf="center"
        width="100%"
      >
        {/* App Icon */}
        <YStack alignItems="center" gap="$4">
          <YStack
            width={120}
            height={120}
            borderRadius="$6"
            backgroundColor="$green2"
            alignItems="center"
            justifyContent="center"
            shadowColor="$green10"
            shadowOffset={{ width: 0, height: 4 }}
            shadowOpacity={0.1}
            shadowRadius={12}
            elevation={4}
          >
            <Image
              source={require("../assets/images/branding.png")}
              style={{ width: 80, height: 80 }}
              resizeMode="contain"
            />
          </YStack>
        </YStack>

        {/* App Title */}

        {/* Description */}
        <YStack gap="$3" alignItems="center">
          <Heading headingSize="xl" textAlign="center">
            TapBoard
          </Heading>
          <Paragraph
            fontSize="$5"
            color="$color"
            textAlign="center"
            lineHeight={24}
            maxWidth={400}
          >
            Track anything with taps, photos, counts, ratings, and more.
          </Paragraph>

          {/* Feature Badges */}

          <XStack
            gap="$3"
            flexWrap="wrap"
            justifyContent="center"
            maxWidth={400}
          >
            <Badge variant="light">Simple One-tap logging</Badge>
            <Badge variant="light">Visual patterns</Badge>

            <Badge variant="light">AI insights</Badge>
            <Badge variant="light">Completely offline</Badge>
          </XStack>
        </YStack>

        {/* Action Buttons */}
        <YStack gap="$3" width="100%" maxWidth={300} marginTop="$6">
          <Link href="/(tabs)" asChild>
            <Button variant="filled" buttonSize="md" fullWidth>
              Get Started
            </Button>
          </Link>
          <Link href="/more-info" asChild>
            <Button variant="outlined" buttonSize="md" fullWidth>
              Learn More
            </Button>
          </Link>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
