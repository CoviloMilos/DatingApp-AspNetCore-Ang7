using System;
using Microsoft.AspNetCore.Http;

namespace DatingApp.API.Dtos
{
    public class RoleEditDto
    {
        public string[] RoleNames { get; set; }
    }
}