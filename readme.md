# File Finder Script

This script is designed to find directories containing a file with a specified name on a Windows system. It uses PowerShell commands through Node.js to search for the file.

## Prerequisites

- Node.js installed.
- Windows operating system.
- Powershell available in the system PATH.

## Usage

The script takes two arguments:

1. The name of the file to search for (required).
2. An optional "silent" argument.

### Example

```bash
node fileFinder.js filename silent
Replace "filename" with the name of the file you are searching for. Include "silent" as the second argument to ignore errors, such as permission errors when accessing certain directories.

Understanding the Output
The script will output a list of directories that contain a file with the specified name. Each directory is printed on a new line.

Troubleshooting
If you get an error about powershell.exe not being recognized, you may need to add the directory containing powershell.exe to your system's PATH, or modify the script to include the full path to powershell.exe.


This `README.md` explains what the script does, what is needed to run it, how to run it, what the output means, and a common issue that might occur. You should adjust it as necessary for your specific needs.