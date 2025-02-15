import { Link } from 'expo-router';
import { View } from 'react-native';
import { H1, Muted, Text } from '~/components/universal-ui/typography';

export default function GreenScreen() {
  return (
    <View className='flex-1 justify-center items-center gap-5'>
      <View className='items-center gap-1'>
        <H1 className='text-green-500'>Green tab</H1>
        <Muted>Swipe to see other tabs</Muted>
      </View>
      <Link href='/(main)/tabs/material-top-tabs/purple'>
        <Text>
          Go to <Text className='text-purple-500 font-bold'>purple</Text> tab
        </Text>
      </Link>
    </View>
  );
}
