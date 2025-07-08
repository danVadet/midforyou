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
                name: "City",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_City", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Containers",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    image = table.Column<string>(type: "TEXT", nullable: false),
                    name = table.Column<string>(type: "TEXT", nullable: false),
                    capacityWeight = table.Column<float>(type: "REAL", nullable: false),
                    capacityVolume = table.Column<float>(type: "REAL", nullable: false)
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
                name: "State",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(type: "TEXT", nullable: false),
                    sigla = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_State", x => x.id);
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
                    measureUnit = table.Column<string>(type: "TEXT", nullable: false),
                    quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    volume = table.Column<float>(type: "REAL", nullable: false),
                    volumeTotal = table.Column<float>(type: "REAL", nullable: false),
                    weightTotal = table.Column<float>(type: "REAL", nullable: false),
                    measureUnitId = table.Column<int>(type: "INTEGER", nullable: false),
                    Containerid = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.id);
                    table.ForeignKey(
                        name: "FK_Products_Containers_Containerid",
                        column: x => x.Containerid,
                        principalTable: "Containers",
                        principalColumn: "id");
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
                    stateid = table.Column<int>(type: "INTEGER", nullable: false),
                    cityid = table.Column<int>(type: "INTEGER", nullable: false),
                    message = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Visitors", x => x.id);
                    table.ForeignKey(
                        name: "FK_Visitors_City_cityid",
                        column: x => x.cityid,
                        principalTable: "City",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Visitors_State_stateid",
                        column: x => x.stateid,
                        principalTable: "State",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PortMarkers_portStateId",
                table: "PortMarkers",
                column: "portStateId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_Containerid",
                table: "Products",
                column: "Containerid");

            migrationBuilder.CreateIndex(
                name: "IX_Visitors_cityid",
                table: "Visitors",
                column: "cityid");

            migrationBuilder.CreateIndex(
                name: "IX_Visitors_stateid",
                table: "Visitors",
                column: "stateid");
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

            migrationBuilder.DropTable(
                name: "City");

            migrationBuilder.DropTable(
                name: "State");
        }
    }
}
