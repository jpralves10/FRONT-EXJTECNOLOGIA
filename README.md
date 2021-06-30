# ExJFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Plugins

@kolkov/angular-editor
https://www.npmjs.com/package/@kolkov/angular-editor
`npm i @kolkov/angular-editor`

## Errors

ERROR in node_modules/ng2-table/components/table/ng-table-filtering.directive.d.ts
Replace Renderer to Renderer2


# Arquivo JAVA e Angular


********** POM.xml *********

<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>br.com.exj</groupId>
    <artifactId>exj-ms-financeiro</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>exj-ms-financeiro</name>
    <description>ExJ Financeiro Microservice with Spring Boot</description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.4.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <properties>
        <project.build.sourceEncoding>UTF-8 </project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <java.version>1.8</java.version>
        <spring-cloud.version>Finchley.RELEASE</spring-cloud.version>
        <jacoco.version>0.7.9</jacoco.version>
        <sonar-jacoco-listeners.version>1.4</sonar-jacoco-listeners.version>
        <sonar.projectKey>exj-ms-financeiro</sonar.projectKey>
        <sonar.projectname>Financeiro Microservice</sonar.projectname>
        <sonar.projectversion>${yearMonth}</sonar.projectversion>
        <sonar.language>java</sonar.language>
        <sonar.sourceEncoding>UTF-8</sonar.sourceEncoding>
        <sonar.java.coveragePlugin>jacoco</sonar.java.coveragePlugin>
        <sonar.dynamicAnalysis>reuseReports</sonar.dynamicAnalysis>
        <jacoco.outputDir>${project.build.directory}</jacoco.outputDir>
        <jacoco.out.ut.file>jacoco.exec</jacoco.out.ut.file>
        <sonar.jacoco.reportPaths>${jacoco.outputDir}/${jacoco.out.ut.file}</sonar.jacoco.reportPaths>
		<aws-java-sdk.version>1.11.699</aws-java-sdk.version>
    </properties>

    <dependencies>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-tomcat</artifactId>
                </exclusion>
            </exclusions>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-websocket</artifactId>
        </dependency>

        <dependency>
            <groupId>javax</groupId>
            <artifactId>javaee-api</artifactId>
            <version>7.0</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
        </dependency>
		
		<!-- Dynamodb -->
		
		<dependency>
            <groupId>com.amazonaws</groupId>
            <artifactId>aws-java-sdk-dynamodb</artifactId>
			<version>${aws-java-sdk.version}</version>
        </dependency>
		
		<dependency>
            <groupId>com.github.derjust</groupId>
            <artifactId>spring-data-dynamodb</artifactId>
			<version>5.1.0</version>
        </dependency>
		

        <!-- biblioteca de tolerância a falhas. Hystrix está observando métodos
             para chamadas com falha para serviços relacionados. Se houver tal falha,
             ele abrirá o circuito e encaminhará a chamada para um método de fallback.
             A biblioteca tolerará falhas até um limite. Além disso, deixa o circuito aberto.
             O que significa que ele encaminhará todas as chamadas subsequentes para o método
             de fallback, para evitar falhas futuras. Isso cria um buffer de tempo para o
             serviço relacionado se recuperar de seu estado de falha.
             https://www.baeldung.com/spring-cloud-netflix-hystrix -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>

        <!-- Apache Poi - Upload de arquivos em Excel -->
        <!-- The Apache POI Project's mission is to create and maintain Java APIs for
             manipulating various file formats based upon the Office Open XML standards (OOXML)
             and Microsoft's OLE 2 Compound Document format (OLE2). In short, you can read and
             write MS Excel files using Java. In addition, you can read and write MS Word and
             MS PowerPoint files using Java.
             https://poi.apache.org/ -->
        <dependency>
            <groupId>org.apache.poi</groupId>
            <artifactId>poi</artifactId>
            <version>4.1.1</version>
        </dependency>

        <dependency>
            <groupId>org.apache.poi</groupId>
            <artifactId>poi-ooxml</artifactId>
            <version>4.1.1</version>
        </dependency>

        <!-- Spring Webflux permite trabalhar com programação reativa
             em aplicações Java com Spring.
             https://medium.com/@michellibrito/spring-webflux-f611c8256c53 -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-webflux</artifactId>
        </dependency>

        <!-- MapStruct é um gerador de código que simplifica muito a implementação de
             mapeamentos entre os tipos de bean Java com base em uma convenção sobre
             abordagem de configuração.
             https://mapstruct.org/ -->
        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct-jdk8</artifactId>
            <version>1.2.0.Final</version>
        </dependency>

        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>maptruct-processor</artifactId>
            <version>1.2.0.Final</version>
        </dependency>

        <!-- Reactor is a fourth-generation reactive library, based on the Reactive Streams
             specification, for building non-blocking applications on the JVM
             https://projectreactor.io/ -->
        <dependency>
            <groupId>io.projectreactor</groupId>
            <artifactId>reactor-test</artifactId>
            <scope>test</scope>
        </dependency>

        <!-- FF4J https://ff4j.github.io/ -->

        <dependency>
            <groupId>org.ff4j</groupId>
            <artifactId>ff4j-web</artifactId>
            <version>1.8</version>
        </dependency>

        <dependency>
            <groupId>org.ff4j</groupId>
            <artifactId>ff4j-spring-boot-starter-parent</artifactId>
            <version>1.8</version>
        </dependency>

        <!-- Thymeleaf as the underlying template engine for parsing the template files
             https://www.baeldung.com/spring-boot-crud-thymeleaf -->
        <dependency>
            <groupId>org.thymeleaf</groupId>
            <artifactId>thymeleaf</artifactId>
            <version>2.1.4.RELEASE</version>
            <exclusions>
                <exclusion>
                    <artifactId>javassist</artifactId>
                    <groupId>org.javassist</groupId>
                </exclusion>
            </exclusions>
        </dependency>

        <!-- O guava se resume a um conjunto de classes utilitárias que auxiliam,
             o desenvolvimento com a linguagem Java.
             https://www.infoq.com/br/news/2010/10/google-guava/ -->
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>16.0</version>
        </dependency>

        <!-- The spring-boot-actuator module provides all of Spring Boot’s production-ready features.
             https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>

        <!-- Este projeto fornece integrações OpenFeign para aplicativos Spring Boot por
             meio de autoconfiguração e vinculação ao Spring Environment e outros idiomas de
             modelo de programação Spring.
             https://cloud.spring.io/spring-cloud-openfeign/reference/html/ -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>

        <!-- https://mvnrepository.com/artifact/io.github.openfeign/feign-httpclient -->

        <dependency>
            <groupId>io.github.openfeign</groupId>
            <artifactId>feign-httpclient</artifactId>
        </dependency>

        <!-- Essa biblioteca torna possível identificar logs pertencentes a uma tarefa,
             encadeamento ou solicitação específica. Sleuth se integra facilmente com
             estruturas de registro como Logback e SLF4J para adicionar identificadores
             exclusivos que ajudam a rastrear e diagnosticar problemas usando registros.
             https://www.baeldung.com/spring-cloud-sleuth-single-application -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-sleuth</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2database</artifactId>
            <scope>local</scope>
        </dependency>

        <!-- O Spring Cloud Contract é um projeto abrangente que contém soluções que ajudam os
             usuários a implementar com sucesso a abordagem de Contratos Orientados ao Consumidor.
             Atualmente, o Spring Cloud Contract consiste no projeto Spring Cloud Contract Verifier.
             https://spring.io/projects/spring-cloud-contract -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-contract-verifier</artifactId>
            <scope>test</scope>
        </dependency>

        <!-- O módulo Spring Cloud Security fornece recursos relacionados à segurança baseada em
             token em aplicativos Spring Boot. Especificamente, torna o SSO baseado em OAuth2 mais
             fácil - com suporte para retransmissão de tokens entre servidores de recursos, bem como
             configuração de autenticação downstream usando um proxy Zuul incorporado.
             https://www.baeldung.com/spring-cloud-security -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-oauth2</artifactId>
        </dependency>

        <!-- https://www.baeldung.com/spring-security-integration-tests -->
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
        </dependency>

        <!-- Você construirá um aplicativo que permite o armazenamento em cache em um repositório.
             https://spring.io/guides/gs/caching/ -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>

        <!-- O Projeto Lombok é uma biblioteca java que se conecta automaticamente ao seu editor e
             ferramentas de construção, aprimorando o seu java. Nunca escreva outro método getter
             ou equals novamente, com uma anotação sua classe tem um construtor completo, Automatiza
             suas variáveis de registro e muito mais.
             https://projectlombok.org/ -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <scope>provided</scope>
        </dependency>

        <!-- Puxar a dependência cria um webjar contendo o conteúdo estático swagger-ui.
             Ele adiciona um endpoint / swagger-resources JSON que lista todos os recursos
             swagger e versões configuradas para um determinado aplicativo. A página da
             IU do Swagger deve estar disponível em http://localhost:8080/swagger-ui.html
             http://springfox.github.io/springfox/docs/current/ -->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.8.0</version>
        </dependency>

        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.8.0</version>
        </dependency>

        <!-- Automatic Test Suite Generation for Java
             https://www.evosuite.org/documentation/tutorial-part-3/ -->
        <dependency>
            <groupId>org.evosuite</groupId>
            <artifactId>evosuite-standalone-runtime</artifactId>
            <version>1.0.6</version>
            <scope>test</scope>
        </dependency>

        <!-- SQLite JDBC é uma biblioteca para acessar e criar arquivos de banco de dados
             SQLite em Java. https://github.com/xerial/sqlite-jdbc -->
        <dependency>
            <groupId>org.xerial</groupId>
            <artifactId>sqlite-jdbc</artifactId>
            <scope>test</scope>
        </dependency>

        <!-- https://github.com/ZsoltFabok/sqlite-dialect -->
        <dependency>
            <groupId>com.zsoltfabok</groupId>
            <artifactId>sqlite-dialect</artifactId>
            <version>1.0</version>
            <scope>test</scope>
        </dependency>

        <!-- ModelMapper analisa seu modelo de objeto para determinar de forma inteligente como
             os dados devem ser mapeados. Não há necessidade de mapeamento manual. ModelMapper
             faz a maior parte do trabalho para você, projetando e nivelando modelos complexos
             automaticamente. http://modelmapper.org/ -->
        <dependency>
            <groupId>org.modelmapper</groupId>
            <artifactId>modelmapper</artifactId>
            <version>2.1.1</version>
        </dependency>

        <!-- Dependências DB -->

        <dependency>
            <groupId>com.microsoft.sqlserver</groupId>
            <artifactId>mssql-jdbc</artifactId>
        </dependency>

        <dependency>
            <groupId>com.microsoft.sqlserver</groupId>
            <artifactId>sqljdbc4</artifactId>
            <version>4.0</version>
        </dependency>

        <dependency>
            <groupId>sc</groupId>
            <artifactId>scconexao</artifactId>
            <version>1.0</version>
        </dependency>

        <!-- Dependências Fila MQ -->

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-activemq</artifactId>
        </dependency>

        <dependency>
            <groupId>com.ibm.mq</groupId>
            <artifactId>mq-jms-spring-boot-starter</artifactId>
            <version>2.0.1</version>
        </dependency>

        <dependency>
            <groupId>javax.interceptor</groupId>
            <artifactId>javax.interceptor-api</artifactId>
            <version>1.2</version>
        </dependency>

        <!-- Archunit Dependências -->
        <!-- https://www.archunit.org/userguide/html/000_Index.html#_using_junit_4_or_junit_5 -->
        <dependency>
            <groupId>com.tngtech.archunit</groupId>
            <artifactId>archunit-junit4</artifactId>
            <version>0.9.1</version>
            <scope>test</scope>
        </dependency>

        <!-- Apache Commons -->
        <!-- Apache Commons Lang fornece uma série de utilitários auxiliares para a API java.lang,
             principalmente métodos de manipulação de String, métodos numéricos básicos, reflexão
             de objeto, simultaneidade, criação e serialização e propriedades do sistema. Além disso,
             contém aprimoramentos básicos para java.util.Date e uma série de utilitários dedicados
             a ajudar na construção de métodos, como hashCode, toString e equals.
             https://commons.apache.org/proper/commons-lang/ -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
        </dependency>

        <dependency>
            <groupId>commons-collections</groupId>
            <artifactId>commons-collections</artifactId>
            <version>3.2.2</version>
        </dependency>

        <dependency>
            <groupId>commons-beanutils</groupId>
            <artifactId>commons-beanutils</artifactId>
            <version>1.9.2</version>
        </dependency>

        <!-- Extensão para o processador Jackson JSON que adiciona suporte para serializar
             POJOs como XML (e desserializar de XML) como uma alternativa para JSON.
             https://github.com/FasterXML/jackson-dataformat-xml -->
        <dependency>
            <groupId>com.fasterxml.jackson.dataformat</groupId>
            <artifactId>jackson-dataformat-xml</artifactId>
        </dependency>

        <!-- Mapeamento de objeto / XML, ou mapeamento O / X para breve, é o ato de converter um
             documento XML de e para um objeto. Esse processo de conversão também é conhecido como
             XML Marshalling ou XML Serialization.
             https://docs.spring.io/spring-ws/site/reference/html/oxm.html -->
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-oxm</artifactId>
        </dependency>

        <dependency>
            <groupId>br.com.itau.adapter</groupId>
            <artifactId>java_adapter_securecredentialstokengenerator_component</artifactId>
            <version>[2.1.0,3.0.0]</version>
        </dependency>

    </dependencies>

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <profiles>
        <profile>
            <id>local</id>
            <activation>
                <activeByDefault>false</activeByDefault>
            </activation>

            <build>
                <plugins>
                    <plugin>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-maven-plugin</artifactId>
                    </plugin>
                </plugins>
            </build>

            <dependencies>
                <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-jetty</artifactId>
                </dependency>

                <dependency>
                    <groupId>org.apache.qpid</groupId>
                    <artifactId>qpid-jms-client</artifactId>
                    <version>0.31.0.redhat-2</version>
                </dependency>

                <dependency>
                    <groupId>org.xerial</groupId>
                    <artifactId>sqlite-jdbc</artifactId>
                </dependency>

                <dependency>
                    <groupId>com.h2database</groupId>
                    <artifactId>h2</artifactId>
                </dependency>

                <dependency>
                    <groupId>com.zsoltfabok</groupId>
                    <artifactId>sqlite-dialect</artifactId>
                    <version>1.0</version>
                </dependency>

                <dependency>
                    <groupId>org.apache.activemq</groupId>
                    <artifactId>activemq-broker</artifactId>
                </dependency>
            </dependencies>
        </profile>

        <profile>
            <id>integrated</id>
            <activation>
                <activeByDefault>false</activeByDefault>
            </activation>

            <build>
                <plugins>
                    <plugin>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-maven-plugin</artifactId>
                    </plugin>
                </plugins>
            </build>

            <dependencies>
                <dependency>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-jetty</artifactId>
                </dependency>

                <dependency>
                    <groupId>org.apache.qpid</groupId>
                    <artifactId>qpid-jms-client</artifactId>
                    <version>0.31.0.redhat-2</version>
                </dependency>

                <dependency>
                    <groupId>org.xerial</groupId>
                    <artifactId>sqlite-jdbc</artifactId>
                </dependency>

                <dependency>
                    <groupId>com.h2database</groupId>
                    <artifactId>h2</artifactId>
                </dependency>

                <dependency>
                    <groupId>com.zsoltfabok</groupId>
                    <artifactId>sqlite-dialect</artifactId>
                    <version>1.0</version>
                </dependency>

                <dependency>
                    <groupId>org.apache.activemq</groupId>
                    <artifactId>activemq-broker</artifactId>
                </dependency>
            </dependencies>
        </profile>

        <profile>
            <id>test</id>
            <activation>
                <property>
                    <name>enable.test.profile</name>
                    <value>true</value>
                </property>
            </activation>

            <build>
                <plugins>
                    <plugin>
                        <groupId>org.jacoco</groupId>
                        <artifactId>jacoco-maven-plugin</artifactId>
                        <version>${jacoco.version}</version>
                        <configuration>
                            <destFile>${sonar.jacoco.reportPaths}</destFile>
                            <append>true</append>
                        </configuration>

                        <executions>
                            <execution>
                                <id>agent</id>
                                <goals>
                                    <goal>prepare-agent</goal>
                                </goals>
                            </execution>
                        </executions>
                    </plugin>

                    <plugin>
                        <artifactId>maven-surefire-plugin</artifactId>
                        <version>2.18.1</version>
                        <configuration>
                            <argLine>${argLine} -XX:MaxPermSize=256m</argLine>
                            <excludes>
                                <exclude>**/*EntryPoint*.java</exclude>
                                <exclude>**/*Mapper*.java</exclude>
                                <exclude>**/*DataProvider*.java</exclude>
                                <exclude>**/*Feign**.java</exclude>
                            </excludes>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        </profile>

        <profile>
            <id>coverage</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>

            <build>
                <plugins>
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-surefire-plugin</artifactId>
                        <configuration>
                            <excludes>
                                <exclude>**/*EntryPoint*.java</exclude>
                                <exclude>**/*Mapper*.java</exclude>
                                <exclude>**/*DataProvider*.java</exclude>
                                <exclude>**/*Feign**.java</exclude>
                            </excludes>
                            <argLine>${jacoco.agent.ut.arg}</argLine>
                            <properties>
                                <property>
                                    <name>listener</name>
                                    <value>org.sonar.java.jacoco.JUnitListener</value>
                                </property>
                            </properties>
                        </configuration>
                    </plugin>

                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-failsafe-plugin</artifactId>
                        <configuration>
                            <argLine>${argLine} -Xmx1024m -XX:MaxPermSize=256m ${jacoco.agent.it.arg}</argLine>
                            <properties>
                                <property>
                                    <name>listener</name>
                                    <value>org.sonar.java.jacoco.JUnitListener</value>
                                </property>
                            </properties>
                            <reportsDirectory>${project.buid.directory}/surefire-reports</reportsDirectory>
                        </configuration>
                    </plugin>

                    <plugin>
                        <groupId>org.jacoco</groupId>
                        <artifactId>jacoco-maven-plugin</artifactId>
                        <version>${jacoco.version}</version>
                        <executions>
                            <execution>
                                <id>pre-unit-test</id>
                                <goals>
                                    <goal>prepare-agent</goal>
                                </goals>
                                <configuration>
                                    <destFile>${sonar.jacoco.reportPaths}</destFile>
                                    <propertyName>jacoco.agent.ut.arg</propertyName>
                                </configuration>
                            </execution>

                            <execution>
                                <id>post-unit-test</id>
                                <phase>test</phase>
                                <goals>
                                    <goal>report</goal>
                                </goals>
                                <configuration>
                                    <dataFile>${sonar.jacoco.reportPaths}</dataFile>
                                    <outputDirectory>${project.reporting.outputDirectory}/jacoco-ut</outputDirectory>
                                </configuration>
                            </execution>
                        </executions>
                    </plugin>
                </plugins>
            </build>

            <dependencies>
                <dependency>
                    <groupId>org.codehaus.sonar-plugins.java</groupId>
                    <artifactId>sonar-jacoco-listeners</artifactId>
                    <version>${sonar-jacoco-listeners.version}</version>
                    <scope>test</scope>
                </dependency>
            </dependencies>

            <buid>
                <finalname>${project.artifactId}</finalname>
                <plugins>
                    <plugin>
                        <groupId>org.springframework.boot</groupId>
                        <artifactId>spring-boot-maven-plugin</artifactId>
                    </plugin>

                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-surefire-plugin</artifactId>
                        <configuration>
                            <argLine>${argLine} -Xmx768m -XX:MaxMetaspaceSize=256m</argLine>
                        </configuration>
                    </plugin>
                </plugins>
            </buid>
        </profile>
    </profiles>

</project>


-------------------------------------------------------------------------------------

********** application.yml *********

server:
  port: 9082

spring:
  application:
    name: financeiro-microservice
  profiles:
    active: integrated
  cloud:
    discovery:
      enabled: false
    config:
      enabled: false
      discovery:
        enabled: false
  jpa:
    properties:
      hibernate:
        show_sql: true
        use_sql_comments: true
        format_sql: true
    show-sql: false
    hibernate:
      ddl-auto: none
  datasource:
    initialize: false

info:
  app:
    name: Financeiro Microservice Application
    description: Microservico responsavel pelo modulo financeiro
    version: 1.0.0

obligationSchedule:
  generation:
    daysToMaxDate: 30

controlpanelRevision:
  scheduledExecutions:
    time: 03:00:00

app:
  cache:
    holidays:
      clearCron: 0 0 0 * * *
    schObligEvent:
      updStatusCron: "0 */1 * * * *"
    financeiro:
      atualizacao: 0 1 0 * * *

security:
  basic:
    enabled: false
  oauth2:
    client:
      clientId: 6c8aa83c-5215-493f-97c9-207f4156230a
    resource:
      filter-order: 3
      jwk.key-set-uri: http://des-sts.int.mbi.cloud.ihf/api/oauth/tokeninfo

feignClient:
  tokenGenerator:
    name: token-generator
    username: exj\\ABC123
    clientId: 6c8aa83c-5215-493f-97c9-207f4156230a
    clientSecret: 878aa83c-5215-493f-97c9-207f415623a8
    password: he5r6p
    autVar: MAR
    flowId: 1
    correlationID: 2
    grantType: client_credentials
    url: https://des-sts-int-mbi.cloud.ihf/api/
    oauth:
      url: oauth/token

  economia:
    name: economia
    apiKey: 6c8aa83c-5215-493f-97c9-207f4156230a
    flowID: 3322
    correlationID: 2212

    cadastrar-agrupamento:
      name: Agrupamento
      host: http://localhost:9083
      url: /economia/v1/agrupamentos

    obter-conta:
      name: Conta
      host: http://localhost:9083
      url: /economia/v1/contas/{idConta}

xd:
  configuracaoes:
    orgao: 4464

exj:
  mq:
    sufficiencyUpdateTopic: GG.Q.GG.K9.SUFICIENCIA.GARANTIAS
    sufficiencyUpdateQueue: GG.Q.GG.K9.SUFICIENCIA.GARANTIAS
    messageTefServiceResponseQueue: K9.Q.XD.K9.XDDOC.RECEPCAO.LIQCLOUD
    messageTefServiceRequestQueue: TESTE.K9
    guaranteeCalculationTopic:
      update-queue: K9.Q.XD.K9.XDDOC.RECEPCAO.LIQCLOUD
      readingQueue: K9.Q.XD.K9.XDDOC.RECEPCAO.LIQCLOUD
      publishingQueue: ${exj.mq.guaranteeCalculationTopic.readingQueue}
      config:
        employeeId: 3.3003495E7
  guarantee:
    components:
      clock:
        enabled: true
    datasource:
      dataSourceName: guaranteeDataSource
      driverClassName: com.microsoft.sqlserver.jdbc.SQLServerDriver
      clientId: K9(HIBERNATE)
      userName: K9CLOUD
      token: 033465998:k9cloud:5C57210AB61F64FB:BF88981840ADE4FA
      url: jdbc:sqlserver://SQDSC040;databaseName=DBK903
      usePool: false
  account:
    datasource:
      dataSourceName: accountDataSource
      driverClassName: com.microsoft.sqlserver.jdbc.SQLServerDriver
      clientId: K9(HIBERNATE)
      userName: K9CLOUD
      token: 033465998:k9cloud:5C57210AB61F64FB:BF88981840ADE4FA
      url: jdbc:sqlserver://SQDSC040.exj;databaseName=DBK904
      usePool: false

#-----------------------------------------
# CONFIGURACOES DE LOG
#-----------------------------------------
logging:
  root:
    dir: env/
  level:
    root: WARN
    splunk: INFO
    br:
      com:
        itau: INFO
    org:
      springframework:
        web: WARN
      hibernate:
        SQL: INFO
        type:
          descriptor:
            sql:
              BasicBinder: TRACE

-------------------------------------------------------------------------------------

********** ff4j-features.xml *********

<?xml version="1.0" encoding="UTF-8" ?>
<ff4j xmlns="http://www.ff4j.org/schema/ff4j"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.ff4j.org/schema/ff4j http://ff4j.org/schema/ff4j-1.4.0.xsd">
    <features>

        <feature uid="enviar_aprovacao" enable="false"
                 description="Funcionalidade para habilitar enviar para aprovação em financeiro"/>

        <feature uid="salvar_composicao" enable="true"
                 description="Funcionalidade para habilitar Salvar em financeiro"/>

    </features>
    <properties>

        <property name="dataUpdEventoFinanAgend"
                  type="org.ff4j.property.PropertyString" value="20:00:00" />

        <property name="dataProcessamentoDiarioAgenda"
                  type="org.ff4j.property.PropertyString" value="0 1 1 * * ?" />

        <property name="listaProdutos"
                  type="org.ff4j.property.PropertyString" value="2,3,4,5" />

    </properties>

</ff4j>

-------------------------------------------------------------------------------------

********** logback-spring.xml *********

<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xml>
<configuration>
    
    <springProperty scope="context" name="LOG_DIR" source="logging.root.dir" />
    <springProperty scope="context" name="springAppName" source="info.app.name" />
        
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <!-- encoders are assigned the type
             ch.qos.logback.classic.encoder.PatternLayoutEncoder by default -->
        <encoder>
            <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
        
    <appender name="splunk" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_DIR:-env/}splunk/splunk.txt</file>
        <append>true</append>
        
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>INFO</level>
        </filter>
        
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <fileNamePattern>${LOG_DIR:-env/}splunk/splunk.%i.txt</fileNamePattern>
            <minIndex>1</minIndex>
            <maxIndex>10</maxIndex>
        </rollingPolicy>
        
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <maxFileSize>50MB</maxFileSize>
        </triggeringPolicy>
        
        <layout>
            <pattern>{ "service": "${springAppName:-}", "correlationId": "%X{X-B3-TraceId:-}", "span": "%X{X-B3-SpanId:-}", "parent": "%X{X-B3-ParentSpanId:-}", "pid": "${PID:-}", "thread": "%thread", "data": %message, "stacktrace": "%replace(%replace(%.1ex{0}%ex{50}){'[\r\n]+', '--newline--'}){'[\t]+', ''}%nopex","date_time":"%d{yyyy-MM-dd HH:mm:ss:SSS}", "log_level": "%p" }%n</pattern>
        </layout>
        
    </appender>
        
    <appender name="app" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_DIR:-env/}financeiro/app.log</file>
        <append>true</append>
        
        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">
            <fileNamePattern>${LOG_DIR:-evn/}financeiro/app.%i.log</fileNamePattern>
            <minIndex>1</minIndex>
            <maxIndex>10</maxIndex>
        </rollingPolicy>
        
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <maxFileSize>50MB</maxFileSize>
        </triggeringPolicy>
        
        <layout>
            <pattern>%d{yyyy-MM-dd HH:mm:ss:SSS} | %-5.5p | {%t} [%C] %F:%L | %m%n</pattern>
        </layout>
    </appender>
    
    <appender name="ASYNC-VERSION-APPENDER" class="ch.qos.logback.classic.AsyncAppender">
        <queueSize>999</queueSize>
        <!-- Never block when the queue becomes full -->
        <neverBlock>true</neverBlock>
        <!-- The default maximum queue flush time allowed during appender stop.
             If the worker takes longer than this time it will exit, discarding ay remaining
             items in the queue. 10000 millis -->
        <maxFlushTime>10000</maxFlushTime>
        <appender-ref ref="app" />
        <appender-ref ref="STDOUT" />
    </appender>
    
    <logger name="splunk">
        <!-- <appender-ref ref="splunk" /> -->
    </logger>
    
    <root level="INFO">
        <appender-ref ref="ASYNC-VERSION-APPENDER" />
        <appender-ref ref="splunk" />
        <!-- <appender-ref ref="STDOUT" /> -->
    </root>
              
</configuration>

-------------------------------------------------------------------------------------

********** Sequência de Classes *********

EntryPoint
	@RequestBody HttpModel
	UseCase return List<Entity>
	response HttpModelMapper.toHttpModelList(entity)
UseCase
Gateway (interface)
DataProvider
	repository
	feign
	
********** Decorators Feign *********

@FeignClient(name="${feignClient.contrato}", url="${feignClient.contrato.url}")
public interface ContratoFeignClient {

	@RequestMapping(method=RequestMethod.GET, value="/v1/contrato/{id_contrato}", consumes="application/json")
	@Headers("Content-<type></type>application/json")
	ResponseEntity<Boolean>obterContrato(
		@RequestHeader(HttpHeaders.AUTHORIZATION) String token,
		@PathVariable("id_contrato") Long idContrato
	);
}

********** Decorators DataProvider *********	

@Component
public class CLienteDataProvider implements ClienteGateway {

	@Autowired
	public ClienteRepository repository
	
	@Autowired
	public ContratosFeign feign
	
	@Override
	public GuaranteePartialResponseEntity getGuarantee(Integer offset, Integer limit){
	
		Page<GuaranteeTable> pageResponse;
		
		try {
			pageResponse = guaranteeRepository.findAll(PageRequest.of(offset, limit));
		}catch (DataAccessException e){
			throw new ServiceUnavailableException(MessageUtil.GUARANTEE_REPOSITORY_FINDALL_ERROR, e);
		}
		
		boolean partialContent = finishElement(offset, limit) < pageResponse.getTotalElements();
		
		return GuaranteePartialResponseEntity.builder()
			.partialContent(partialContent)
			.result(pageResponse.getContent().stream().map(guaranteeTableMapper::to).collect(Collectors.toList()))
			.totalRecords(pageResponse.getTotalElements()).build();
	}
}



********** Decorators UseCase *********

@Component
public class ClienteUseCase {
	
	@Autowired
	public ClienteGataway gataway
}

********** Decorators Application *********

@EnableAsync
@EnableScheduling
@EnableCircuitBreaker
@EnableJms
@EnableFeignClients(basePackages= {br.com.projeto.feign})
@ComponentScan(basePackages={br.com.projeto})
@SpringBootApplication
public class ProjetoApplication extends SpringBootServletInitializer {

	@Bean
	public ThreadPoolTaskScheduler threadPoolTaskScheduler(){
		ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();
		threadPoolTaskScheduler.setPoolSize(10)
		return threadPoolTaskScheduler;
	}
}

********** Decorators Entity *********

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Entity {}				
				
********** Decorators EntryPoint *********

@RequestController
@RequestMapping("api/teste")
public class EntryPoint {
	
	@ApiOperation(value = "Consulta os registros do cliente", response = ResponsavelContratoHttpModel.class)
	@ApiResponses(value = {@ApiResponse(code=200, message="Sucesso")})
	@GetMapping(path = "/cliente")
	public Teste getTeste(
		@RequestParam(value="offset", defaultValue="0") Integer offset,
		@RequestParam(value="limit", defaultValue="10") Integer limit){
		
		if(!clientes){
			return ResponseEntity.noContent().<build></build>();
		}else{
			return ResponseEntity.ok(ClienteHttpModelMapper.INSTANCE.toHttpModelList(clientes));
		}		
	}
}

********** Decorators Table *********

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TBK0001_CLIENTE_FISICO")
public class ClienteFisicoTable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "COD_CLI_FIS", nullable = false)
	private Long codCliente;
}

********** Decorators EntityTable *********

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "TBK9123_ACAO_CASCATA")
public class AcaoCascataTable implements Serializable {

	@EmbeddedId
	private AcaoCascataPKTable id;
	
	@Column(name = "VLR_LIQU", precision = 15, scale = 2)
	private Double valorLiquidacao;
}


@Data
@Builder
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class AcaoCascataPKTable implements Serializable {

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "NUM_CTRL_RLMT_CSCA", nullable = false, insertable = false, updatable = false)
	private RelacionaAcaoCascataTable relacionaAcaoCascata;
	
	@Column(name = "NUM_CTRL_AGED_PSST_GARA", nullable = false)
	private Long numAgendaProcessamentoGarantia;
}


@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "TBK9125_RELC_ACAO_CSCA")
public class RelacionaAcaoCascataTable implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "NUM_CTRL_RLMT_CSCA")
	private Long idRelacionaAcaoCascata;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name = "NUM_CTRL_ACAO_CSCA", nullable = false)
	
	@OneToMany(fetch = FetchType.LAZY, mappeBy = "id.relacionaAcaoCascata", cascade = CascadeType.ALL)
	private List<AcaoCascataTable> acaoCascataTableList;
	
	@OneToMany(fetch = FetchType.LAZY, mappeBy = "action")
	private List<ObligationScheduleLogTable> obligationScheduleLogs;
	
	//FIXME Estamos utilizando um ENUM do status, refatorar para tabela de dominio
	@Convert(converter = StatusTableEnumAttributeConverter.class)
	@Column(name = "COD_SITU_GARA_PARM_ACAO", length = 1, nullable = false)
	private StatusTableEnum status;
	
	@Embedded
	@AttributeOverrides({
		@AttributeOverride(name = "validityStart", column = @Column(name = "DAT_HOR_INTO_VIGE_PARM_ACAO", nullable = false)),
		@AttributeOverride(name = "validityEnd", column = @Column(name = "DAT_HOR_FIM_VIGE_PARM_ACAO", nullable = false)) })
	private ValidityRegisterEmbeddable validity;
}

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class ValidityRegisterEmbeddable implements Serializable {

	private LocalDateTime validityStart;
	private LocalDateTime validityEnd;
}


@Converter(autoApply = true)
public class StatusTableEnumAttributeConverter implements AttributeConverter<StatusTableEnum, String> {
    
    private static final StatusTableEnum NULL_STATUS_TABLE_ENUM = null;
    private static final String NULL_STRING = null;
    
    @Override
    public String convertToDatabaseColumn(StatusTableEnum status) {
        return Optional.ofNullable(status).map(StatusTableEnum::getStatus).orElse(NULL_STRING);
    }

    @Override
    public StatusTableEnum convertToEntityAttribute(String statusValue) {
        return Optional.ofNullable(statusValue).map(StatusTableEnum::getStatusByValue).orElse(NULL_STATUS_TABLE_ENUM);
    }
}

********** Decorators Repository *********

Provider:
	repository.bucarRegistros(param1, param2, PageRequest.of(offset, limit))
	
Repository:
	@Query("select * from Table tb"
	+ "tb.param1 = :param1"
	+ "tb.param2 = :param2")
	Page<Table>bucarRegistros(@Param("param1") String param1,
							   @Param("param2") String param2,
							   Pageable pageable);


*************************************** Links ***************************************

tech.ebayinc.com/engineering/application-resiliency-using-netflix-hystrix
github.com/resilience4j/resilience4j#1-introduction

https://dev.to/felipedsc/behaviorsubject-para-comunicacao-entre-componentes-3kpj 

https://jasonwatmore.com/post/2019/06/14/angular-8-reactive-forms-validation-example 

https://stackblitz.com/edit/angular-comunicacao-behaviorsubject?file=src%2Fapp%2Fapp.component.html


*************************************** package.json *********************************************************

{
	"name": "projeto-front",
	"version": "0.0.0",
	"license": "MIT",
	".": {
		"ng": "ng",
		"start": "ng serve",
		"build": "ng build --prod",
		"test": "ng test",
		"list": "ng lint",
		"e2e": "ng e2e"
	},
	"scripts": {
		"dev-wiremock": "npm run wiremock && npm run wiremock-proxy && ng serve",
		"test": "npm run wiremock && npm run wiremock-proxy && ng test --code-coverage --sourcemaps=true",
		"wiremock": "cd projeto-front-mock && start wiremock_standalone.sh",
		"wiremock-proxy": "cd projeto-front-mock && cd wiremock-proxy && start wiremock_standalone.sh"
	},
	"private": true,
	"dependencies": {
		"@angular/animations": "5.2.0",
		"@angular/common": "5.2.0",
		"@angular/compiler": "5.2.0",
		"@angular/core": "5.2.0",
		"@angular/forms": "5.2.0",
		"@angular/http": "5.2.0",
		"@angular/platform-browser": "5.2.0",
		"@angular/platform-browser-dynamic": "5.2.0",
		"@angular/router": "5.2.0",
		"@ng-bootstrap/ng-bootstrap": "2.0.0",
		"@ng-select/ng-select": "^1.6.3",
		"angular-notifier": "^3.0.0",
		"core-js": "2.4.1",
		"file-saver": "^2.0.0",
		"jwt-decode": "^2.2.0",
		"net": "^1.0.2",
		"ng-multiselect-dropdown": "0.2.1",
		"ng2-currency-mask": "^5.3.1",
		"ng2-select": "^2.0.0",
		"ng2-table": "1.3.2",
		"ngx-mask": "^8.0.1",
		"ngx-mask-2": "^6.5.23",
		"ngx-spinner": "^2.0.1",
		"rxjs": "5.5.6",
		"sockjs-client": "^1.4.0",
		"stompjs": "^2.3.3",
		"xlsx": "^0.14.1",
		"zone.js": "0.8.19"
	},
	"devDependencies": {
		"@angular/cli": "~1.7.4",
		"@angular/compiler-cli": "^5.2.0", 
		"@angular/language-service": "^5.2.0",
		"@types/jasmine": "~2.8.3",
		"@types/jasminewd2": "~2.0.2",
		"@types/node": "~6.0.60",
		"@typescript-eslint/eslint-plugin": "^2.16.0",
		"@typescript-eslint/parser": "^2.16.0",
		"codelyzer": "^4.0.1",
		"eslint": "^6.8.0",
		"eslint-config-airbnb-base": "^14.0.0",
		"eslint-config-prettier": "^6.9.0",
		"eslint-plugin-import": "^2.20.0"
		"eslint-plugin-prettier": "^3.1.2",
		"jasmine-core": "~2.8.0",
		"jasmine-spec-reporter": "~4.2.1",
		"karma": "~2.0.0",
		"karma-chrome-launcher": "~2.2.0"
		"karma-coverage-istanbul-report": "^1.2.1",
		"karma-jasmine": "~1.1.0",
		"karma-jasmine-html-report": "^0.2.2",
		"ng-bullet": "^1.0.3",
		"prettier": "^1.19.1",
		"protractor": "~5.1.2",
		"ts-node": "~4.1.0",
		"tslint": "~5.9.1",
		"typescript": "^2.8.1"
	}
}

*************************************** tsconfig.json *********************************************************

{
	"compileOnSave": false,
	"compilerOptions": {
		"outDir": "./dist/out-tsc",
		"sourceMap": true,
		"declaration": false,
		"moduleResolution": "node",
		"emitDecoratorMetadata": true, //AQUI
		"experimentalDecorators": true,
		"dowlevelIteration": true,
		"target": "es5",
		"typeRoots": [
			"node_modules/@types"
		],
		"lib": [
			"es2017",
			"dom"
		]
	}
}

*************************************** angular.json *********************************************************

"styles": [
  "src/styles.css",
  "src/assets/css/fonts/font.css",
  "src/assets/css/bootstrap.min.css",
],

*************************************** ViewChild e ViewChildren *********************************************************

export class ActionModalComponent implements OnInit, AfterViewInit {

	@ViewChild(TransactionComponent) transaction: TransactionComponent
	@ViewChild(ComunicationComponent) comunication: ComunicationComponent
	
	@ViewChildren('parametrizationsectio') private parameterGroup: Array<ActionParametrizationModelGroupComponent> = [];
	
	@Output() modalTitle: string
	
	...
}

*************************************** Paginação HTML *********************************************************

constructor(
	private router: Router,
	private route: ActivatedRoute,
	private testData: TestData
){
	/* this.testData.getTestes(10, this.pagina.pagina).subscribe(res => {}) */
	
	this.qtdPaginas = Array(this.testes.qtdPaginas).fill(0).map((x, i) => i = i + 1);
	this.pagina.qtdPaginas = this.qtdPaginas.slice(0, 3)
	this.backupTestesItens = [...this.testes.itens]
}

/* --- Start Pagination --- */
setaPagina(paginaNow: number){
	this.pagina.pagina = paginaNow;
	
	let paginaInicial = this.pagina.pagina - 1
	let paginaFinal = this.pagina.pagina + 2
	
	if(paginaFinal <= this.qtdPaginas.length){
		this.pagina.qtdPaginas = this.qtdPaginas.slice(paginaInicial, paginaFinal)
	}
}

<nav aria-label="...">
	<ul class="pagination d-flex justify-content-center table-class-pagination">
		<li [className]="pagina.pagina == 1 ? 'page-item disabled' : 'page-item'">
			<a class="page-link" tabindex="-1" (click)="setaPagina(pagina.pagina-1)">Anterior</a>
		</li>

		<li 
			*ngFor="let paginaNow of pagina.qtdPaginas" 
			[className]="paginaNow == pagina.pagina ? 'page-item active' : 'page-item'">
			<a class="page-link" (click)="setaPagina(paginaNow)">{{paginaNow}}</a>
		</li>

		<!--li class="page-item active">
			<a class="page-link" href="#">1</a>
		</li>
		<li class="page-item active">
			<a class="page-link" href="#">2</a>
		</li>
		<li class="page-item">
			<a class="page-link" href="#">3</a>
		</li-->

		<li [className]="pagina.pagina == qtdPaginas.length ? 'page-item disabled' : 'page-item'">
			<a class="page-link" (click)="setaPagina(pagina.pagina+1)">Próximo</a>
		</li>
	</ul>
</nav>



*************************************** Modal *********************************************************

constructor(
	private modalService: NgbModal
){}
				
private confirmValidateToShowDialog(guaranteeid: number){

	const confirmationModalTitle = 'Deseja prosseguir com a operação';
	const confirmationModalMessage = 'Os dados não salvos serão perdidos.';
	
	const confirmeModalComponent: NgModalRef = this.modalService.open(ConfirmedModalComponent, {
		centered: true,
		windowClass: this.modalWindowClass,
		backdrop: 'static'
	});
	
	const modalComponentInstance: ConfirmedModalComponent = 
		confirmedModalComponent.componentInstance;
	modalComponentInstance.modalTitle = confirmationModalTitle;
	modalComponentInstance.modalConfirmationMessage = confirmationModalMessage;
	
	confirmationModalComponent.result.then(
		() =>{
			this.cleanGuarantee();
			this.disableToShowRule(guaranteeId);
		},
		() =>{}
	);
}				
				
				
*************************************** Table *********************************************************		

Grid Config Model:

export interface GridConfig {

    /**
     * Configuração do ng-table se a tabela será paginada ou não
     */
    paging: boolean;

    /**
     * Flag que indica se o componente de paginação deve estar visível ou não
     */
    showPagination: boolean;

    /**
     * Objeto com as configurações de Ordenação
     */
    sorting: any;

    /**
     * Objeto com as configurações de filtro
     */
    filtering: any;

    /**
     * Classes CSS da tabela
     */
    className: Array<string>;
}

Esterira Operacional Grid Item:

export interface EsteiraOperacionalGridItem {
	id: number;
	nomeEsteira: string;
	statusEsteira: string;
	iconConsultar: string;
	iconCancelar: string;
}

Component TS:

	@Input() @Output() messageBodyResult: string;
	@Input() @Output() itemsPerPage: number;
	@Input() @Output() maxSize: number;
	@Input() tableId: string;
	@Input() paginationId: string;
	@Input() gridData: Array<EsteiraOperacionalGridItem>;
	@Input() checklistPage: Array<EsteiraOperacionalGridItem> = new Array<EsteiraOperacionalGridItem>();
	@Output() esteiraEmitter = new EventEmitter();
	@Output() config: GridConfig;
	@Output() readonly columns: Array<GridColumnSearchEventModel>;

	constructor(){
		this.rows = [];
		this.page = 1;
		this.length = 0;
		this.maxSize = 8;
		this.itemsPerPage = 10;
		this.descendantTableSort = "desc";
		this.ascendantTableSort = "asc";
		this.listColumnHeaderClass = 'listing-column-header';
		this.defaultColumnClasses = [this.listColumnHeaderClass, 'exj-text-bold', 'font-size-16'];
		this.iconSortingUpClass = 'icon-sorting-up';
		this.iconSortingDownClass = 'icon-sorting-down';
		this.isShowPaginationTableFiltered = true;
		
		this.columns = [
			{
				title: 'Nome da Esteira',
				name: 'nomeEsteira',
				className: this.defaultColumnClasses.concat('th-width-300');
				sort: true
			},
			{
				title: 'Status',
				name: 'statusEsteira',
				className: this.defaultColumnClasses.concat('th-width-120 align-center');
				sort: true
			},
			{
				title: 'Consultar',
				name: 'iconConsultar',
				className: this.defaultColumnClasses.concat('th-width-110 align-center');
				sort: true
			},
			{
				title: 'Cancelar',
				name: 'iconCancelar',
				className: this.defaultColumnClasses.concat('th-width-110 align-center');
				sort: true
			},
		];
		
		this.config: GridConfig = {
			paging: true,
			showPagination: true,
			sorting: {columns: this.columns},
			filtering: {filterString: ''},
			className: ['table-striped', 'table-bordered']
		};
	}
	
	ngOnInit(){
		if(this.gridData != null){
			this.length = this.gridData.length
		}
		this.isTableDataEmpty = !(this.gridData && this.gridData.length);
		this.onChangeTable(this.config);
	}
	
	ngOnChanges(): void {
		this.hasMessageToBody = this.messageBodyResult != null;
		if(this.gridData){
			this.length = this.gridData.length;
			this.onChangeTable(this.config);
		}
		this.isTableDataEmpty = !(this.gridData && this.gridData.length);
		
		if(this.gridData.length != 0){
			this.length = this.gridData.length
		}
		this.config.showPagination = (this.gridData.length > this.itemsPerPage);
	}
	
	public onChangeTable(config: any): void {
		var table = document.getElementById(this.tableId);
		var headersTable = {} as NodeListOf<Element>;
		let spanElementSelector = 'span';
		
		if(table){
			headersTable = table.getElementByClassName(this.listColumnHeaderClass);
		}
		
		for(let x=0; x < headersTable.length; x++){
			while(headersTable[x].getElementsByTagName(spanElementSelector).length > 0){
				headersTable[x].getElementsByTagName(spanElementSelector)[0].parentNode.removeChild(headersTable[x].getElementsByTagName('span')[0]);
			}
		}
		
		var page: any = { page: this.page, itemsPerPage: this.itemsPerPage };
		
		if(config.sorting){
			Object.assign(this.config.sorting, config.sorting);
		}
		
		let sortedData = this.changeSort(this.gridData, this.config);
		this.rows = page && config.paging ? this.changePage(page, sortedData): sortedData;
		this.length = sortedData.length;
		
		for(let x=0; x < headersTable.length; x++){
			for(var column of this.config.sorting.columns){
				var headerText = headersTable[x].innerHTML;
				if(headerText.includes(column.title) && (column.sort === true || column.sort === '')){
					var iconUp = document.createElement(spanElementSelector);
					iconUp.className = this.iconSortingUpClass;
					headersTable[x].appendChild(iconUp);
					
					var iconDown = document.createElement(spanElementSelector);
					iconDown.className = this.iconSortingDownClass;
					headersTable[x].appendChild(iconDown);
				}
			}
		}
	}
	
	public changeSort(data: any, config: any): any {
		if(!config.sorting){
			return data;
		}
		
		let columns = this.config.sorting.columns || [];
		let columnName: string = void 0;
		let sort: string = void 0;
		
		for(let i=0; i < columns.length; i++){
			if(columns[i].sort !== '' && columns[i].sort !== false){
				columnName = columns[i].name;
				sort = columns[i].sort;
			}
		}
		
		if(!columnName){
			return data;
		}
		
		//simple sorting
		return data.sort((previous: any, current: any) => {
			if(previous[columnName] != null){
				if(this.stringUtilsService.removeAccents(previous[columnName]).toLowerCase() >
					this.stringUtilsService.removeAccents(current[columnName]).toLowerCase()){
					return sort === this.descendantTableSort ? -1 : 1;
				} else if(this.stringUtilsService.removeAccents(previous[columnName]).toLowerCase() <
					this.stringUtilsService.removeAccents(current[columnName]).toLowerCase()){
					return sort === this.ascendantTableSort ? -1 : 1;
				}
			}
			return 0;
		});
	}
	
	public changePage(page: any, data: Array<EsteiraOperacionalGridItem>): Array<any>{
		const start = (page.page - 1) * page.itemsPerPage;
		const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
		const newArray = data.slice(start, end);
		if(newArray.length !== 0){
			return newArray;
		}
	}
	
Component HTML:

<div [id]="tableId">
	<ng-table
		[rows]="rows"
		[columns]="columns"
		[config]="config"
		(tableChanged)="onChangeTable(config)"
		(cellClicked)="onCellClick($event)" >
	</ng-table>
	<app-message-body-grid
		*ngIf="hasMessageToBody"
		[messageBody]="messageBodyResult" >
	</app-message-body-grid>
	<ngb-pagination
		[id]="paginationId"
		class="ngb-pagination"
		[(page)]="page"
		*ngIf="mostrarPaginacao()"
		[collectionSize]="length"
		[pageSize]="itemsPerPage"
		[maxSize]="maxSize"
		[boundaryLinks]="false"
		[rotate]=false
		(pageChange)="onChangeTable(config, $event)"
		(numPages)="numPages = $event"
		arial-label="Default pagination >
	</ngb-pagination>
</div>

*************************************** Ng Multiselect Dropdown / FormGroup *********************************************************

Component:

public contratoSelecionado: any;
public contractComboList: Array<OperationalContactUpdate> = [];
public dropdownSettingsContrato = {};

public genericFormGroup: FormGroup;


private configuracaoDropDownContratos(): void {
	this.dropdownSettingsContrato = {
		singleSelection: true,
		idField: 'id',
		textField: 'codSigla',
		itemsShowLimit: this.contractComboList.length,
		allowSearchFilter: true,
		noDataAvailablePlaceholderText: 'Nenhum registro encontrado',
		searchPlaceholderText: 'Filtrar'
	}
}


HTML:

<form class="needs-validation" [formGroup]="genericFormGroup">
	<div class="row">
		<div class="col-sm-4">
			<div class="form-group">
				<label class="text-regular color-text-gray">Id/Sigla: *</label>
				<ng-multiselect-dropdown
					formControlName='sigla'
					id="inputContrato"
					[(ngModel)]="contratoSelecionado"
					class="inputIdSigla font-size-12"
					[placeholder]="'Selecione'"
					[data]="contractComboList"
					[settings]="dropdownSettingsContrato"
					(onSelect)="alteraContas(this.genericFormGroup.controls['sigla'].value)"
					(onDeSelect)="resetDropDownWhenRemove()"
					[disabled]="genericFormGroup.controls['sigla'].disabled" >
				</ng-multiselect-dropdown>
				<div class="invalid-feedback" *ngIf="genericFormGroup.get('sigla').invalid">
					Sigla inválida.
				</div>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="form-group">
				<label class="text-regular color-text-gray">Status: *</label>
				<select class="custom-select font-size-14 input-border col-12" id="dropDownStatusContrato"
					formControlName="status" #selectContractStatus >
					<option value="" selected>Selecione</option>
					<option *ngFor="let situacao of situacaoList" [value]="situacao.id">
						{{situacao.nome}}
					</option>
			</div>
		</div>
	</div>
</form>


*************************************** Spinner *********************************************************		

Component:

constructor(
	private spinner: NgxSpinnerService
){}

ngOnInit(){
	this.configurarTipoSpinner();
	this.spinner.show();
	this.spinner.hide();
}

private configurarTipoSpinner(){
	const randomNumber = Math.floor(Math.random() * 9) + 1;
	
	this.listaTipoSpinner = [
		'pacman',
		'square-jelly-box',
		'timer',
		'pacman',
		'line-scale-pulse-out-rapid',
		'fire',
		'cube-transition',
		'triangle-skew-spin',
		'ball-spin',
		'ball-8bits',
		'ball-zig-zag-deflect'
	];
	
	this.nomeTipoSpinner = this.listaTipoSpinner[randomNumber];
}
	
HTML:

<ngx-spinner bdColor="rgba(51,51,51,0.8)" size="medium" color="#fff" [type]="nomeTipoSpinner">
	<p style="font-size: 20px; color: white">Loading...</p>
</ngx-spinner>

*************************************** Notifier Toasty *********************************************************		

constructor(
	private notifierService: NotifierService
){
	this.notifier = notifierService;
}

public showToastySuccess(): void {
	this.notifier.notify('toasty-success', 'Operação realizada com sucesso!')
}

public showToastyError(): void {
	this.notifier.notify('toasty-error', 'Erro na operação. \n Por favor, tente novamente!')
}
	
*************************************** Download File *********************************************************		

public downloadRelatorioContratos(): void {
	this.spinner.show();
	this.relatorioAdminService
		.getRelatorioContatos()
		.pipe(finalize(() => this.spinner.hide()))
		.subscribe(
			res => {
				const blob = new Blob([res], {type: 'application/vnd.ms-excel'});
				const file = new File([blob], this.nomeArquivo + '.xlsx', {type: 'application/vnd.ms-excel'});
				FileSaver.saveAs(file);
			},
			err => {
				this.verifyMessageErrorByStatusCode(err, 'Erro ao gerar Relatório')
			}
		);
}

*************************************** ForkJoin *********************************************************		

private retrieveCompositionRule(guaranteeId: number){
	const compositionService = this.guaranteeRuleService.getRuleComposition(
		this.contrato.idContrato,
		guaranteeId
	);
	
	const actionDomainObservable: Observable<Array<GuaranteeRulesAction>> =
		this.retrieveActionDomainParameterization();
		
	const ruleModalItem = this.getNewRuleModalItems();
	
	forkJoin([compositionService, actionDomainObservable, ruleModalItem]).subscribe(
		result => {
			this.ruleCompositionView = this.transformaCascataEmAcao(results[0].result);
			this.domainActions = results[1];
			this.modalItems = results[2];
			this.preencheAbaProdutos();
			this.fillPeriodicity();
		},
		err => {
			if(err.status === HttpStatus.zero || HttpStatus.isError(err.status)){
				this.showToastyError();
			}
		}
	);
}

*************************************** Promise All *********************************************************		

ngOnInit(){
	this.spinner.show();
	Promise.all([this.populaSiglaId(), this.populaComboEventos()]).then(() => {
		this.verificaConsulta();
	})
	.then(() => {
		this.spinner.hide();
	})
	.catch(() => {
		this.spinner.hide();
	})
}

private populaSiglaId(): Promise<any> {
	return this.contractGuaranteeService
		.getAllContractGuarantee(null, null)
		.toPromise()
		.then(
			res => {
				if(res){
					const lista = [...res.result];
					this.contractComboList = lista.filter(
						item => item.contractStatus.status === 'Aprovado'
					);
				}
			},
			() => this.exibirToastyErro('Ocorreu um erro ao carregar os dados')
		);
}


*************************************** Navegação *********************************************************

Routing.Module:

const routes: Routes = [
	{
		path: 'atendimento',
		component: AtendimentoComponent
	},
	{
		path: 'consulta-atendimento/:id/:status',
		component: FormAtendimentoComponent
	},
    {
        path: '',
        data: {
            breadcrumb: {visible:false}
        },
        component: PrincipalComponent,
        children: [
            /*{
                path: 'cursos',
                //loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Cursos'
                    }
                }
            },*/
            {
                path: 'painelcontrole',
                loadChildren: () => import('./painelcontrole/painelcontrole.module').then(m => m.PainelControleModule),
                //canActivateChild: [AuthGuardService],
                data: {
                    breadcrumb: {
                        visible: true,
                        label: 'Painel de Controle'
                    }
                }
            }
        ]
    }
];

Component:

constructor(
	private route: ActivatedRoute,
	private router: Router
){}

this.router.navigate(['./atendimento'])

this.router.navigate([`/atendimento/consulta-atendimento/${event.idAtendimento}/${event.statusValor}`])

this.router.navigate([`/catalogo/catalogo-edit`], {
	relativeTo: this.route,
	replaceUrl: false,
	queryParams: {
		filterCatalogo: JSON.stringify({...produto})
	}
});

constructor(
	private router: Router,
	private route: ActivatedRoute
) {
	this.route.queryParamMap.subscribe(paramMap => {
		this.produto = JSON.parse(paramMap.get('filterCatalogo'));
	})
}


*************************************** ChatService *********************************************************

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatHistory, ChatAuthentication } from '../data/chat';
import { ChatService } from '../http/chat.service';
import { scheduleJob } from 'node-schedule';

@Injectable({
    providedIn: 'root'
})
export class UpdateChatService {

  private chatHistorySource: BehaviorSubject<ChatHistory> = new BehaviorSubject(this.getChatHistory());
  public chatHistory: Observable<ChatHistory> = this.chatHistorySource.asObservable();

  constructor(
    private chatService: ChatService
  ){
    localStorage.setItem('chatHistory', JSON.stringify(''));
  }

  chatAuthentication(nome: string, email: string){
    return new Promise((resolve, reject) => {

        this.chatService.getChatAutentica(nome, email).subscribe(res => {

          this.saveChatAuthentication(res)

          this.getChatReceive(res.atendimento_sessao_id, 10, true)

          resolve(true);

        }, err => {
          reject(err);
        });
    });
  }

  getChatReceive(id: number, limit: number, hitory: boolean, last?: number): Promise<any> {
    return new Promise((resolve, reject) => {

      this.chatService.getChatReceive(id, limit, hitory, last).subscribe(chatHistory => {

        chatHistory.models.forEach(model => {
          model.person = model.sender_id == this.getChatAuthentication().atendimento_sessao_id ? 'message me' : 'message other'
        })

        this.saveChatHistory(chatHistory);
        
        //this.alertService.set({type: 'success', message: `Seja bem vindo, ${res.data.name}!`});

        resolve(true);

      }, err => {
        reject(err);
      });
    });
  }

  setChatReceive(message: string, idLastMessage: number){
    this.chatService.setChatSend(this.getChatAuthentication().atendimento_sessao_id, message).subscribe(returnSend => {

      if(returnSend.statusCode === 201){
        this.getChatReceive(this.getChatAuthentication().atendimento_sessao_id, 1, false, idLastMessage)
      }
    })
  }

  saveChatAuthentication(chatAuthentication: ChatAuthentication) {
    localStorage.setItem('chatAuthentication', JSON.stringify(chatAuthentication));
  }

  getChatAuthentication(): ChatAuthentication {
    return JSON.parse(localStorage.getItem('chatAuthentication'));
  }

  saveChatHistory(chatHistory: ChatHistory) {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

    this.chatHistorySource.next(chatHistory);
  }

  getChatHistory(): ChatHistory {
    return JSON.parse(localStorage.getItem('chatHistory'));
  }
}

*************************************** ChatComponent *********************************************************

import { Component, OnInit } from '@angular/core';
import { UpdateChatService } from 'src/app/core/services/chat.service';
import { Message, ChatHistory } from 'src/app/core/data/chat';
import { scheduleJob, cancelJob, Job } from 'node-schedule';
import $ from "jquery";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public isOpen = false;
  public counter = 10;
  public textMessage = '';
  public message: Message = {}
  public messages = [];
  public flForm = false;

  public chatSchedule: Job

  constructor(
    private chatService: UpdateChatService
  ) {}

  ngOnInit() {
    this.chatService.chatHistory.subscribe(chatHistory => this.messageChatHistory(chatHistory));
  }

  messageChatHistory(chatHistory: ChatHistory){
    if(this.messages.length == 0){
      this.setMessage();
    }else{
      chatHistory.models.sort((a, b) => Number(a.id) - Number(b.id));
      this.messages.push(...chatHistory.models)
      this.updateScroll()

      //console.log("##", this.messages[this.messages.length - 1].id)

      cancelJob(this.chatSchedule)
      this.scheduleJobChat()
    }
  }

  scheduleJobChat(){
    this.chatSchedule = scheduleJob('*/5 * * * * *', function(chat, idLast){
      //console.log("@@", idLast)
      chat.chatService.getChatReceive(chat.chatService.getChatAuthentication().atendimento_sessao_id, 10, false, idLast)
    }.bind(null, this, this.messages[this.messages.length - 1].id));
  }

  setMessage(){
    if(this.messages.length == 0){
      this.flForm = true;
      this.messages.push(this.generateMessage("Digite o seu nome:", "message other"))
    }
  }

  updateScroll(){
    setTimeout(function(){
      var div = $("#messageid");
      var h = div.get(0).scrollHeight;
      div.animate({scrollTop: h}, 800);
    }, 100);
  }

  sendMessage(){
    if(this.flForm){
      this.chatAuthentication();
    }else{
      this.chatService.setChatReceive(this.textMessage, this.messages[0].id);
    }
    this.updateScroll()
    this.textMessage = '';
  }

  chatAuthentication(){
    if(this.messages.length == 3){      
      this.messages.push(this.generateMessage(this.textMessage, "message me"))

      this.chatService.chatAuthentication(this.messages[1].text,  this.messages[3].text).then(ret => {
        this.flForm = false
      });
    }

    if(this.messages.length == 1){
      this.messages.push(this.generateMessage(this.textMessage, "message me"))
    }

    if(this.messages.length == 2){
      this.messages.push(this.generateMessage("Digite o seu email:", "message other"))
    }
  }

  generateMessage(textMessage: string, person: string){
    let message: Message = {}
    message.text = textMessage.trim()
    message.created_at = new Date().getTime()
    message.person = person
    return message;
  }

  formatCreatedAt(dateTime: number){
    let created_at = new Date(dateTime)
    return created_at.toLocaleDateString('pt-BR') + ' ' + created_at.toLocaleTimeString('pt-BR')
  }
}
