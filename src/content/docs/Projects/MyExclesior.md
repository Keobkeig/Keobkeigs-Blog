---
title: My Exclesior 
description: My optimized version StuyPulse Robotic's 2021-2022 season robot, Exclesior.
---
# Inside the Code of the My Exclesior

## Robot Architecture

The codebase follows a command based architecture using WPILib Java. What does this mean?

- The **Robot** class acts as the main coordinator, initializing modes and scheduling command execution
- **Subsystems** like the drivetrain, intake, and shooter encapsulate the hardware control
- **Commands** are action classes that control the subsystems to perform robot behaviors
- The **RobotContainer** is where everything gets wired together - default commands, button bindings, and auton modes

This architecture allows flexibility when programming the robot capabilities. New commands can be introduced without having to modify the subsystems.

## Robot Capabilities
- **Teleoperated mode** - The joysticks drive the drivetrain around and buttons control sequences like shooting a ball
- **Autonomous mode** - Preprogrammed routines in AutoMode.java are selected on the driver station and perform tasks like scoring in goals
- **Vision targeting** - A camera provides positioning data to improve shooting accuracy

Some of the key robot actions include:

- Driving in tank steer with dual joysticks
- Running the intake wheels to grab game pieces
- Indexing balls in the conveyor
- Firing balls out of the flywheel shooter
- Aligning to targets using vision
- Climbing at the end of match with an elevator

## Before You Use

- Ensure that the `GradleRIO`, `StuyLib`, and `venderdeps` versions are up-to-date in your new repository.

## To Update | Maintain

- Import project to the latest version of WPILib using the built-in import tool. 
- Check that the `GradleRIO` version is up to date. 
- Check the latest version of [StuyLib here](https://github.com/StuyPulse/StuyLib/releases) and update the version in `./build.gradle`.
- Update the files in `./venderdeps` with their latest version, checking their respective websites. 
