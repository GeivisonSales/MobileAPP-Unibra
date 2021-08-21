import React, { Component } from 'react';
import {SafeAreaView, ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
import logo from './assets/logo.png'; 
const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getCompany() {
    try {
    const response = await fetch('https://host.nikyus.com/api/test.json', {
      method: 'GET',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
      }});
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getCompany();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <SafeAreaView style={{ flex: 1, padding: 45, justifyContent: 'center',
      alignItems: 'center', }}>
      <Image source={logo} style={{ width: 100, height: 70, color: '#888', marginBottom: 12, marginTop: 10, backgroundColor:'#fff'}} /> 
        
       
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{color: '#888', fontSize: 18, padding: 2, borderRadius: 15}}>
              <B>Situação:</B> {item.situacao}, 
              {"\n"}<B>CNPJ:</B> {item.cnpj}
              {"\n"}<B>Razão Social:</B> {item.razao_social}
              {"\n"}<B>Nome Fantasia:</B> {item.nome_fantasia}
              {"\n"}<B>Data de Abertura:</B> {item.data_abertura}
              {"\n"}<B>Capital Social:</B> {item.c_social}
              {"\n"}<B>Tipo:</B> {item.tipo}
              {"\n"}<B>Natureza Juridica:</B> {item.natureza_juridica}
              {"\n"}<B>Porte da Empresa:</B> {item.porte_da_empresa}
              {"\n"}<B>Quantidade de Funcionários:</B> {item.quantidade_de_func}
              {"\n"}<B>Faturamento Presumido:</B> {item.faturamento_presumido}
              {"\n"}<B>Telefone:</B> {item.tel}
              {"\n"}<B>Email:</B> {item.email}
              {"\n"}<B>UF:</B> {item.uf}
              {"\n"}<B>Municipio:</B> {item.municipio}
              {"\n"}<B>Bairro:</B> {item.bairro}
              {"\n"}<B>Longradouro:</B> {item.longradouro}
              {"\n"}<B>Número:</B> {item.numero}
              {"\n"}<B>Complemento:</B> {item.complemento}
              {"\n"}<B>Cep:</B> {item.cep}
              {"\n"}<B>Atividade Economica:</B> {item.atividade_economica}
              </Text>
            )}
          />
        )}

       
      </SafeAreaView>
    );
  }
};