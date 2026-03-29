#!/bin/bash
# Download FMCG expertise card images from Figma
# Run this script from the project root: bash download-fmcg-expertise-images.sh

DIR="public/images/industries/fmcg"
mkdir -p "$DIR"

echo "Downloading FMCG expertise card images..."

curl -L -o "$DIR/primary-distribution.png" "https://www.figma.com/api/mcp/asset/3364fb3a-7440-421d-ae9d-42b494ea6f11"
echo "  1/5 primary-distribution.png"

curl -L -o "$DIR/secondary-last-mile.png" "https://www.figma.com/api/mcp/asset/118b9c78-ae06-4c07-a23d-6cabb433d5e5"
echo "  2/5 secondary-last-mile.png"

curl -L -o "$DIR/high-velocity.png" "https://www.figma.com/api/mcp/asset/b53f09db-5dd7-4136-8da9-3f0944effc28"
echo "  3/5 high-velocity.png"

curl -L -o "$DIR/warehousing.png" "https://www.figma.com/api/mcp/asset/07977646-94a0-459a-bc30-224e122e22a3"
echo "  4/5 warehousing.png"

curl -L -o "$DIR/ecommerce.png" "https://www.figma.com/api/mcp/asset/60870037-9128-4ee1-9032-69d5a4e93123"
echo "  5/5 ecommerce.png"

echo ""
echo "Done! Verifying downloads:"
ls -la "$DIR"/*.png

# Clean up this script
rm -f download-fmcg-expertise-images.sh
