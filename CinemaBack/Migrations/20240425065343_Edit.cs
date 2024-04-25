using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CinemaBack.Migrations
{
    /// <inheritdoc />
    public partial class Edit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NameFiln",
                table: "Film",
                newName: "NameFilm");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NameFilm",
                table: "Film",
                newName: "NameFiln");
        }
    }
}
