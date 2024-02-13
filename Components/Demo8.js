import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const Demo8 = props => {
  const [users, setUsers] = useState(USERS);
  const [color, setColor] = useState('black');

  // refreshing
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setColor('blue');
    // giả lập gọi API
    setTimeout(() => {
      setRefreshing(false);
      setColor('yellow');
      setUsers([]);
    }, 2000);
  };

  // adapter
  const renderItem = ({item}) => {
    const {id, first_name, last_name, email, avatar} = item;
    return (
      <View>
        <Image source={{uri: avatar}} style={{width: 100, height: 100}} />
        <Text>{first_name}</Text>
      </View>
    );
  };
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: color}}>
      {refreshing && <Text>Loading...</Text>}
      <FlatList
        refreshing={refreshing}
        onRefresh={onRefresh}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Demo8;

const styles = StyleSheet.create({});

// dữ liệu ảo testing
var USERS = [
  {
    id: 1,
    first_name: 'Clayson',
    last_name: 'Cuthbertson',
    email: 'ccuthbertson0@who.int',
    avatar: 'http://dummyimage.com/246x100.png/dddddd/000000',
  },
  {
    id: 2,
    first_name: 'Giffy',
    last_name: 'Dulinty',
    email: 'gdulinty1@uiuc.edu',
    avatar: 'http://dummyimage.com/116x100.png/dddddd/000000',
  },
  {
    id: 3,
    first_name: 'Mitchel',
    last_name: 'Ranking',
    email: 'mranking2@admin.ch',
    avatar: 'http://dummyimage.com/108x100.png/5fa2dd/ffffff',
  },
  {
    id: 4,
    first_name: 'Reine',
    last_name: 'Waskett',
    email: 'rwaskett3@bloglovin.com',
    avatar: 'http://dummyimage.com/105x100.png/5fa2dd/ffffff',
  },
  {
    id: 5,
    first_name: 'Cacilie',
    last_name: 'Sopp',
    email: 'csopp4@slashdot.org',
    avatar: 'http://dummyimage.com/203x100.png/ff4444/ffffff',
  },
  {
    id: 6,
    first_name: 'Agretha',
    last_name: 'Dartnell',
    email: 'adartnell5@cisco.com',
    avatar: 'http://dummyimage.com/113x100.png/cc0000/ffffff',
  },
  {
    id: 7,
    first_name: 'Finn',
    last_name: 'Terrett',
    email: 'fterrett6@yelp.com',
    avatar: 'http://dummyimage.com/118x100.png/5fa2dd/ffffff',
  },
  {
    id: 8,
    first_name: 'Brannon',
    last_name: 'Gibbie',
    email: 'bgibbie7@sakura.ne.jp',
    avatar: 'http://dummyimage.com/148x100.png/ff4444/ffffff',
  },
  {
    id: 9,
    first_name: 'Edee',
    last_name: 'Terzo',
    email: 'eterzo8@bandcamp.com',
    avatar: 'http://dummyimage.com/192x100.png/dddddd/000000',
  },
  {
    id: 10,
    first_name: 'Amabel',
    last_name: 'Ballinger',
    email: 'aballinger9@1688.com',
    avatar: 'http://dummyimage.com/217x100.png/5fa2dd/ffffff',
  },
  {
    id: 11,
    first_name: 'Kayne',
    last_name: 'Yurenin',
    email: 'kyurenina@about.com',
    avatar: 'http://dummyimage.com/153x100.png/5fa2dd/ffffff',
  },
  {
    id: 12,
    first_name: 'Roxanna',
    last_name: 'Girardin',
    email: 'rgirardinb@amazon.de',
    avatar: 'http://dummyimage.com/169x100.png/5fa2dd/ffffff',
  },
  {
    id: 13,
    first_name: 'Ester',
    last_name: 'Kleis',
    email: 'ekleisc@gov.uk',
    avatar: 'http://dummyimage.com/224x100.png/dddddd/000000',
  },
  {
    id: 14,
    first_name: 'Frederick',
    last_name: 'Cossington',
    email: 'fcossingtond@vk.com',
    avatar: 'http://dummyimage.com/229x100.png/5fa2dd/ffffff',
  },
  {
    id: 15,
    first_name: 'Theodora',
    last_name: 'Neilands',
    email: 'tneilandse@imgur.com',
    avatar: 'http://dummyimage.com/146x100.png/ff4444/ffffff',
  },
  {
    id: 16,
    first_name: 'Drud',
    last_name: 'Maestrini',
    email: 'dmaestrinif@sitemeter.com',
    avatar: 'http://dummyimage.com/180x100.png/5fa2dd/ffffff',
  },
  {
    id: 17,
    first_name: 'Coralyn',
    last_name: 'Girdwood',
    email: 'cgirdwoodg@indiegogo.com',
    avatar: 'http://dummyimage.com/232x100.png/dddddd/000000',
  },
  {
    id: 18,
    first_name: 'Emile',
    last_name: 'Danieli',
    email: 'edanielih@wikispaces.com',
    avatar: 'http://dummyimage.com/247x100.png/dddddd/000000',
  },
  {
    id: 19,
    first_name: 'Trenton',
    last_name: 'Berridge',
    email: 'tberridgei@ft.com',
    avatar: 'http://dummyimage.com/137x100.png/ff4444/ffffff',
  },
  {
    id: 20,
    first_name: 'Esta',
    last_name: 'Rhydderch',
    email: 'erhydderchj@printfriendly.com',
    avatar: 'http://dummyimage.com/215x100.png/cc0000/ffffff',
  },
];
