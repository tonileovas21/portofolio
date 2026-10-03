# TOOL FOR SCAN NETWORK

import subprocess

command = "netsh wlan show network mode=bssid"
output  = subprocess.check_output(command,shell=True)
decoded = output.decode(errors='ignore')

# parse and display the results
networks = []
current = {}
for line in decoded.splitlines():
    line = line.strip()
    if line.startswith("SSID"):
        if current:
            networks.append(current)
            current = {}
        current["ssid"] = line.split(":",1)[1].strip()
    elif "signal" in line:
        current["signal"] = line.split(":",1)[1].strip()
    elif "chanel" in line:
        current["chanel"] = line.split(":",1)[1].strip()
    elif "autentication" in line:
        current["security"] = line.split(":",1)[1].strip()

if current:
    networks.append(current)
print("\n[+] nearby wi-fi Networks:\n")
for i, net in enumerate(networks, 1):
    print(f"[{i}] {net.get('ssid', 'N/A')}|"
         f"signal: {net.get('signal','N/A')}|"
         f"security:{net.get('security','N/A')}|"
         f"chanel: {net.get('chanel','N/A')}")


