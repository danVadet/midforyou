using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class createInitial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Containers",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    image = table.Column<string>(type: "TEXT", nullable: false),
                    name = table.Column<string>(type: "TEXT", nullable: false),
                    capacityWeightKg = table.Column<float>(type: "REAL", nullable: false),
                    capacityWeightLb = table.Column<float>(type: "REAL", nullable: false),
                    capacityVolumeM3 = table.Column<float>(type: "REAL", nullable: false),
                    capacityVolumeFt3 = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Containers", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PortState",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    label = table.Column<string>(type: "TEXT", nullable: false),
                    lat = table.Column<float>(type: "REAL", nullable: false),
                    lng = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PortState", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Visitors",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    fullName = table.Column<string>(type: "TEXT", nullable: false),
                    phoneNumber = table.Column<string>(type: "TEXT", nullable: false),
                    email = table.Column<string>(type: "TEXT", nullable: false),
                    companyName = table.Column<string>(type: "TEXT", nullable: false),
                    companyCNPJ = table.Column<string>(type: "TEXT", nullable: false),
                    ramoAtividade = table.Column<string>(type: "TEXT", nullable: false),
                    state = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    message = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visitors", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "TEXT", nullable: false),
                    length = table.Column<float>(type: "REAL", nullable: false),
                    width = table.Column<float>(type: "REAL", nullable: false),
                    height = table.Column<float>(type: "REAL", nullable: false),
                    weight = table.Column<float>(type: "REAL", nullable: false),
                    measureUnit = table.Column<int>(type: "INTEGER", nullable: false),
                    weightUnit = table.Column<int>(type: "INTEGER", nullable: false),
                    quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    volume = table.Column<float>(type: "REAL", nullable: false),
                    volumeTotal = table.Column<float>(type: "REAL", nullable: false),
                    weightTotal = table.Column<float>(type: "REAL", nullable: false),
                    containerId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.id);
                    table.ForeignKey(
                        name: "FK_Products_Containers_containerId",
                        column: x => x.containerId,
                        principalTable: "Containers",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PortMarkers",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    label = table.Column<string>(type: "TEXT", nullable: false),
                    lat = table.Column<float>(type: "REAL", nullable: false),
                    lng = table.Column<float>(type: "REAL", nullable: false),
                    portType = table.Column<int>(type: "INTEGER", nullable: false),
                    image = table.Column<string>(type: "TEXT", nullable: false),
                    color = table.Column<string>(type: "TEXT", nullable: false),
                    address = table.Column<string>(type: "TEXT", nullable: false),
                    portStateId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PortMarkers", x => x.id);
                    table.ForeignKey(
                        name: "FK_PortMarkers_PortState_portStateId",
                        column: x => x.portStateId,
                        principalTable: "PortState",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PortMarkers_portStateId",
                table: "PortMarkers",
                column: "portStateId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_containerId",
                table: "Products",
                column: "containerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PortMarkers");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Visitors");

            migrationBuilder.DropTable(
                name: "PortState");

            migrationBuilder.DropTable(
                name: "Containers");
        }
    }
}
