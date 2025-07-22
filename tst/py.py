import os
import socket
import subprocess
from mac_vendor_lookup import MacLookup

subnet = "10.0.0."  
mac_lookup = MacLookup()

for i in range(1, 255):
    ip = subnet + str(i)
    response = os.system(f"ping -n 1 -w 200 {ip} >nul")

    if response == 0:
        try:
            hostname = socket.gethostbyaddr(ip)[0]
        except:
            hostname = "Unknown device"

        try:
            arp_output = subprocess.check_output(f"arp -a {ip}", shell=True).decode()
            mac = "Not found"

            for line in arp_output.splitlines():
                if ip in line:
                    parts = line.split()
                    for part in parts:
                        if "-" in part and len(part) == 17:
                            mac = part  

            if mac != "Not found":
                try:
                    vendor = mac_lookup.lookup(mac)
                except:
                    vendor = "Unknown vendor"
            else:
                vendor = "MAC not found"

            print(f"✅ IP: {ip} | Hostname: {hostname} | MAC: {mac} | Vendor: {vendor}")

        except Exception as e:
            print(f"❌ IP: {ip} | Hostname: {hostname} | MAC/Vendor lookup failed: {e}")
