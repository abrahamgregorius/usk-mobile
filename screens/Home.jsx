import { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"

function Home({navigation}) {
    const [recipes, setRecipes] = useState([])
    const [categories, setCategories] = useState([])

    async function fetchRecipes() {
        const response = await fetch('http://192.168.56.1:8000/api/v1/recipes')
        const resJson = await response.json()
        console.log(resJson)
        setRecipes(resJson.recipes)
    }
    async function fetchCategories() {
        const response = await fetch('http://192.168.56.1:8000/api/v1/categories')
        const resJson = await response.json()
        setCategories(resJson.categories)
    }

    useEffect(() => {
        fetchRecipes()
        fetchCategories()
    }, [])

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.section}>
                        <View style={styles.hero}>
                            <Text style={{ marginLeft: 10, fontSize: 28, fontWeight: 500 }}>Categories</Text>
                            <Text 
                            onPress={() => navigation.navigate("CreateCategory")}
                            style={{ marginRight: 10, fontSize: 28, fontWeight: 300 }}>+</Text>
                        </View>

                        <View>
                            {categories.map((item) => {
                                return(
                                    <View style={styles.card}>
                                        <Text>{item.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>


                    <View style={styles.section}>
                        <View style={styles.hero}>
                            <Text style={{ marginLeft: 10, fontSize: 28, fontWeight: 500 }}>Recipes</Text>
                            <Text 
                            onPress={() => navigation.navigate("CreateRecipe")}
                            style={{ marginRight: 10, fontSize: 28, fontWeight: 300 }}>+</Text>
                        </View>

                        <View>
                            {recipes.map((item) => {
                                return(
                                    <View style={styles.card}>
                                        <Text>{item.title}</Text>
                                        <Text>Ingredients: {item.ingredients}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    hero: {
        padding: 10,
        backgroundColor: "lightgrey",
        borderRadius: 8,
        justifyContent: "space-between",
        flexDirection: "row",
    },

    card: {
        padding: 8,
        marginTop: 8,
        marginHorizontal: 4,
        borderWidth: 1,
        borderRadius: 8,
    },
    
    section: {
        marginBottom: 9
    }
})

export default Home