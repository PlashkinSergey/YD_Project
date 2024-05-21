using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CinemaBack.Migrations
{
    /// <inheritdoc />
    public partial class UpdateModelSeance : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "Seance",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Time",
                table: "Seance",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Seance");

            migrationBuilder.DropColumn(
                name: "Time",
                table: "Seance");
        }
    }
}
