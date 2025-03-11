import org.jetbrains.kotlin.gradle.targets.js.dsl.ExperimentalDistributionDsl

plugins {
    kotlin("multiplatform") version "2.1.0"
}

group = "ru.morozovit"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

kotlin {
    js(IR) {
        browser {
            @OptIn(ExperimentalDistributionDsl::class)
            distribution {
                outputDirectory.set(projectDir.resolve("dist"))
            }
        }
        binaries.executable()
    }

    sourceSets {
        commonMain.dependencies {
            implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.10.1")
            implementation(kotlin("stdlib-js"))
            implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.8.0")
        }
    }
}

tasks.register("jsBrowserProductionExecutable") {
    doLast {
        val dist = layout
            .buildDirectory
            .dir("dist")
            .get()
            .asFile
            .also {
                it.deleteRecursively()
                it.mkdir()
            }
        val compileSync = layout
            .buildDirectory
            .dir("compileSync/js/main/productionExecutable/kotlin")
            .get()
            .asFile
            .also { it.mkdir() }
        val processedResources = layout
            .buildDirectory
            .dir("processedResources/js/main")
            .get()
            .asFile
            .also { it.mkdir() }

        fun moveFilesFromDir(dir: File, dest: File) {
            dir.listFiles()?.forEach { file ->
                file.copyRecursively(File("${dest.absolutePath}/${file.name}"), overwrite = true)
            }
        }

        moveFilesFromDir(compileSync, dist)
        moveFilesFromDir(processedResources, dist)
    }
}

tasks["jsBrowserProductionWebpack"].finalizedBy("jsBrowserProductionExecutable")
