const { spawn } = require('child_process');
const path = require('path');

// Check if there's at least one command-line argument
if (process.argv.length < 3) {
    console.error('You must provide a filename as the first command-line argument.');
    process.exit(1);
}

const filename = process.argv[2];

// Determine the command to run based on whether 'silent' was given as the second argument
const cmd = process.argv.length > 3 && process.argv[3].toLowerCase() === 'silent'
    ? `Get-ChildItem -Path "C:\\" -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.Name -match '${filename}' } | ForEach-Object { $_.Directory } | Sort-Object -Unique`
    : `Get-ChildItem -Path "C:\\" -Recurse | Where-Object { $_.Name -match '${filename}' } | ForEach-Object { $_.Directory } | Sort-Object -Unique`;

// Use spawn to run the command in PowerShell
const child = spawn('powershell.exe', [cmd]);

// Print stdout data
child.stdout.on('data', data => console.log(data.toString()));

// Print stderr data
child.stderr.on('data', data => console.error(data.toString()));
