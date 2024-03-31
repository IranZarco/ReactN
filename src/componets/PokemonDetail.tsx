import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';

import { PokemonFull } from '../interfaces/pokemonInterfaces';

interface Props {
  pokemon: PokemonFull;
}

const ProgressBar = ({ value, maxValue, color }: { value: number, maxValue: number, color: string }) => {
  const progress = (value / maxValue) * 100;
  return (
    <View style={{ ...styles.progressBar, backgroundColor: color, width: `${progress}%`, marginHorizontal: 5 }} />
  );
};

export const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.pokemonInfoContainer}>
        <View style={styles.spriteContainer}>
          <Image
            style={styles.sprite}
            source={{ uri: pokemon.sprites.front_default }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{pokemon.name}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.regularText}>Height:</Text>
            <Text style={styles.valueText}>{pokemon.height * 10} cm</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.regularText}>Weight:</Text>
            <Text style={styles.valueText}>{pokemon.weight / 10} kg</Text>
          </View>
          <View style={styles.abilitiesContainer}>
            <Text style={styles.regularText}>Abilities:</Text>
            {pokemon.abilities.map(({ ability }) => (
              <Text style={styles.ability} key={ability.name}>
                {ability.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
      { /* statistics/estadisticas */ }
      <View style={styles.statContainer}>
        <Text style={styles.title}>Statistics</Text>
        <FlatList
          data={pokemon.stats}
          keyExtractor={(item) => item.stat.name}
          renderItem={({ item }) => (
            <View style={styles.statListItem}>
              <View style={styles.statNameContainer}>
                <Text style={styles.statName}>{item.stat.name}</Text>
              </View>
              <ProgressBar value={item.base_stat} maxValue={255} color="blue" />
              <View style={styles.statValueContainer}>
                <Text style={styles.statValue}>{item.base_stat}</Text>
              </View>
            </View>
          )}
        />
      </View>
      { /* Sprites/Imágenes */ }
      <View
                    style={styles.imagenContainer}
                >
                    <Text
                        style={{
                            ...styles.title,
                        }}
                    >
                        Sprites
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            style={ styles.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.back_default
                            }}
                            style={ styles.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.front_shiny
                            }}
                            style={ styles.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.back_shiny
                            }}
                            style={ styles.basicSprite }
                        />
                        <Image
                            source={{
                                uri: pokemon.sprites.front_default
                            }}
                            style={ styles.basicSprite }
                        />
                    </ScrollView>
                </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #C5FADA ',
  },
  basicSprite:{
    height: 100,
    width: 100,
  },
  pokemonInfoContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  spriteContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#DDDDDD',
    marginRight: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sprite: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 18,
    marginVertical: 5,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  valueText: {
    fontSize: 18,
    marginLeft: 10,
  },
  abilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // add this line
    marginTop: 10,
    marginRight: 20,
  },
  ability: {
    backgroundColor: '#F2F2F2',
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    fontSize: 14,
    marginTop: 5,
  },
  statContainer: {
    padding: 20,
    backgroundColor: 'gray',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  statListItem: {
    marginBottom: 10,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: ' #99C5F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  statNameContainer: {
    width: '30%',
    marginRight: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  statName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  statValueContainer: {
    width: '20%',
    marginLeft: 'auto',
    backgroundColor: '#F2F2F2',
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  statValue: {
    fontSize: 16,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  imagenContainer: {
    padding: 20,
    backgroundColor: 'gray',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  }
});

export default PokemonDetail;