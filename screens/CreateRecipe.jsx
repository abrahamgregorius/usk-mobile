import { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


function CreateRecipe() {
    const [name, setName] = useState("")
    const [slug, setSlug] = useState("")

    async function handleSubmit() {
        const response = await fetch("http://192.168.56.1:8000/api/v1/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                slug: slug
            })
        })
        const resJson = await response.json()
        navigation.navigate('Home')
    }

    useEffect(() => {
        console.log(name, slug)
    })

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formControl}>
                        <Text style={{ fontWeight: 300, marginBottom: 4 }}>Category name</Text>
                        <TextInput onChangeText={(e) => setName(e)} style={styles.input} placeholder="Enter the category name"></TextInput>
                    </View>

                    <View style={styles.formControl}>
                        <Text style={{ fontWeight: 300, marginBottom: 4 }}>Category slug</Text>
                        <TextInput onChangeText={(e) => setSlug(e)} style={styles.input} placeholder="Enter the category slug"></TextInput>
                    </View>

                    <Button
                    title="Create"
                    color={"grey"}
                    onPress={handleSubmit}
                    ></Button>
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

    input: {
        borderWidth: 1, 
        padding: 6,
        borderRadius: 8,
        borderColor: "grey"
    },

    formControl: {
        marginBottom: 8
    },
})

export default CreateRecipe