# Tab Focus Alarm
A simple yet effective full-screen webpage that alerts you when you switch tabs, windows, or minimize the browser, perfect for staying focused.

![image](/example.png)

- **Full-screen design**: Takes up the entire browser window for maximum visibility
- **Dynamic background**: Green when focused, red when unfocused
- **Audio alert**: Plays a beep sound when focus is lost
- **Smooth transitions**: Color changes with a subtle animation effect
- **Dual detection**: Uses `visibilitychange` and `focus/blur` events for reliability

[Visibility-Detector](https://diegoaybar.github.io/Visibility-Detector/)
[Tab Focus Alarm](https://www.soundjay.com/buttons/beep-01a.mp3)

## Features
- Changes background to green when the page is visible or focused
- Switches to red and plays an alarm sound when:
  - You switch tabs
  - You switch windows
  - The browser is minimized
- Includes a smooth color transition for a polished look
- Uses a public domain beep sound (customizable with any audio URL)

## Notes
- [Initial Click Required for Visibility Detection Sound to Work](https://github.com/diegoaybar/Visibility-Detector/issues/1#issue-2924777344)
- Requires an internet connection to load the alarm sound
- Some browsers may block autoplay audio until the page is interacted with

Built with HTML, CSS, and JavaScript by [Diego Aybar](https://github.com/diegoaybar).
